import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-gray-500">技術的な知見や学習の記録</p>
      </header>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-2 text-sm text-gray-500">
              {post.date}
            </div>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.description}
            </p>
            <div className="mt-auto">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary-600 hover:text-primary-700 inline-flex items-center"
              >
                記事を読む →
              </Link>
            </div>
          </article>
        ))}
        
        {posts.length === 0 && (
          <p className="text-center text-gray-500">記事はまだありません。</p>
        )}
      </div>
    </div>
  );
}