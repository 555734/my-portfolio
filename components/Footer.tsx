import Link from 'next/link';

export default function Footer() {
  return (
    // 背景色を濃い青にし、文字色を明るい青/白にする
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          {/* コピーライト */}
          <p className="text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>

          {/* ソーシャルリンク */}
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