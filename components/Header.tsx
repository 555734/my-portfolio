import Link from 'next/link';

export default function Header() {
  return (
    // 背景を青色のグラデーションに変更し、文字色を白にする
    <header className="sticky top-0 z-50 w-full border-b border-primary-600/30 bg-gradient-primary text-white shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-primary-600/90">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        {/* ロゴエリア */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary-100"
        >
          My Portfolio
        </Link>

        {/* ナビゲーション */}
        <nav className="flex gap-6 text-sm font-medium text-primary-50">
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}