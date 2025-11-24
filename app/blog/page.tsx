// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      {/* ヒーローセクション */}
      <section className="w-full max-w-3xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              My Portfolio
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            エンジニアとしての活動記録と、技術ブログを掲載しています。
            Next.jsとモダンなウェブ技術で構築された、私のデジタルガーデンへようこそ。
          </p>
        </div>
        
        {/* アクションボタン群 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
          >
            ブログを読む
          </Link>
          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          >
            プロフィールを見る
          </Link>
        </div>
      </section>

      {/* 特徴・スキルセクション（例） */}
      <section className="mt-24 grid w-full max-w-3xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* カード1 */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">🚀 Modern Tech</h3>
          <p className="text-sm text-gray-500">
            Next.js 15 (App Router), React, TypeScript を使用して構築されています。
          </p>
        </div>
        {/* カード2 */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">🎨 Tailwind CSS</h3>
          <p className="text-sm text-gray-500">
            ユーティリティファーストなCSSフレームワークで、柔軟なデザインを実現。
          </p>
        </div>
        {/* カード3 */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">📝 MDX Blog</h3>
          <p className="text-sm text-gray-500">
            MarkdownにReactコンポーネントを埋め込めるMDXで記事を管理しています。
          </p>
        </div>
      </section>
    </div>
  );
}