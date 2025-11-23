import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-600 transition">
          My Portfolio
        </Link>

        {/* ナビゲーション */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/works" className="hover:text-blue-600 transition">
            Works
          </Link>
        </nav>
      </div>
    </header>
  );
}