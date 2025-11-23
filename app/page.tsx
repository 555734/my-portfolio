import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>My Portfolio</h1>
      <p>エンジニアとして活動しています。</p>

      <div style={{ marginTop: '40px' }}>
        <h2>Menu</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* さっき作ったブログ一覧ページへのリンク */}
          <li style={{ margin: '10px 0' }}>
            <Link href="/blog" style={{ color: 'blue', textDecoration: 'underline' }}>
              Blog (技術ブログ)
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link href="/about" style={{ color: 'gray' }}>
              About (準備中)
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}