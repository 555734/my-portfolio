import Link from 'next/link';

export default function Header() {
  return (
    // 修正: 白背景ベースのすりガラス効果に変更
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      {/* コンテンツ幅を max-w-5xl に広げる */}
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-primary-600"
        >
          My Portfolio
        </Link>

        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/blog" className="transition-colors hover:text-primary-600">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}