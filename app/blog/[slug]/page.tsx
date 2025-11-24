import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link'; // 👈 【必須】これを追加！
import { notFound } from 'next/navigation'; // 👈 404処理用

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// (オプション) ページのタイトルなどを動的に設定
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return { title: `${meta.title} | My Portfolio` };
  } catch {
    return { title: 'Article Not Found' };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  // 記事取得をtry-catchで囲むか、データがない場合に404を出す
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound(); // 👈 記事がない場合は404ページへ
  }

  const { meta, content } = post;

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    // max-w-3xl mx-auto で中央寄せ＆幅制限
    <div className="max-w-3xl mx-auto">
      <article className="py-8 bg-white md:p-10 md:rounded-xl md:shadow-sm md:border border-gray-100">
        <header className="mb-10 text-center border-b border-gray-100 pb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{meta.title}</h1>
          <time className="text-gray-500 block">{meta.date}</time>
        </header>
        
        {/* 記事本文のデザイン調整 */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-primary-600 hover:prose-a:text-primary-700">
          <MDXRemote source={content} options={options} />
        </div>
      </article>
      
      {/* 戻るボタン */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-primary-600 underline underline-offset-4 transition-colors">
          ← ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
}