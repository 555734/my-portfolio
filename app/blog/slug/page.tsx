import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

// ... (GenerateStaticParamsなどは変更なし) ...
type Props = { params: { slug: string } };

// ↓ これがないとビルドエラーになることがあるので再掲
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params;
  const { meta, content } = getPostBySlug(slug);

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <article className="py-8">
      {/* タイトルエリア */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-gray-500">{meta.date}</p>
      </header>
      
      {/* MDX本文エリア: prose prose-slate 等を入れるだけで整形される */}
      <div className="prose prose-slate max-w-none">
        <MDXRemote source={content} options={options} />
      </div>
    </article>
  );
}