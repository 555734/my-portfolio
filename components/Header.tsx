import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        {/* ロゴエリア */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
        >
          My Portfolio
        </Link>

        {/* ナビゲーション */}
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/blog" className="transition-colors hover:text-blue-600">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-blue-600">
            About
          </Link>
          {/* Worksページを作ったらコメントアウトを外してください */}
          {/* <Link href="/works" className="transition-colors hover:text-blue-600">
            Works
          </Link> */}
        </nav>
      </div>
    </header>
  );
}