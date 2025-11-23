import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 記事ファイルが置いてあるディレクトリ
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// 記事のメタデータ（型定義）
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// 1. 全記事のリストを取得する関数（一覧ページ用）
export function getAllPosts(): PostMeta[] {
  // ディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // ファイル名から ".mdx" を除外してスラッグにする
    const slug = fileName.replace(/\.mdx$/, '');

    // ファイルの中身を読む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matterでメタデータを解析
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    } as PostMeta;
  });

  // 日付順にソート
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 2. 特定の記事の中身を取得する関数（詳細ページ用）
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    meta: { slug, ...data } as PostMeta,
    content,
  };
}