import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100 mt-auto">
      {/* コンテンツ幅を max-w-5xl に修正 */}
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/555734"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}