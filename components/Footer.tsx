import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          {/* コピーライト */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>

          {/* ソーシャルリンク（テキスト版） */}
          <div className="flex gap-6">
            <a
              href="https://github.com/555734" // あなたのGitHub IDに合わせてください
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              GitHub
            </a>
            {/* 必要に応じて追加 */}
            {/* <a
              href="https://twitter.com/your_id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-400"
            >
              Twitter
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}