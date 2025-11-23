import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

// 【修正 1】 params を Promise 型にする
type Props = {
  params: Promise<{ slug: string }>; 
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  // 【修正 2】 params を await して中身を取り出す
  const { slug } = await params; 
  
  const { meta, content } = getPostBySlug(slug);

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <article className="py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-gray-500">{meta.date}</p>
      </header>
      
      <div className="prose prose-slate max-w-none">
        <MDXRemote source={content} options={options} />
      </div>
    </article>
  );
}