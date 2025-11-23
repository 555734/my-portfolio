import Link from 'next/link';
import { getAllPosts } from '@/lib/posts'; // パスは環境に合わせて調整してください

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main style={{ padding: '20px' }}>
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '10px' }}>
            <Link href={`/blog/${post.slug}`}>
              <h2 style={{ fontSize: '1.2rem', color: 'blue' }}>{post.title}</h2>
            </Link>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{post.date}</p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}