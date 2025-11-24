import Link from 'next/link';

export default function Home() {
  return (
    // ドットパターン背景を追加（radial-gradientを利用）
    <div className="relative flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <section className="w-full max-w-5xl space-y-8 text-center px-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              My Portfolio
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            エンジニアとしての活動記録と、技術ブログを掲載しています。<br/>
            Next.jsとモダンなウェブ技術で構築された、私のデジタルガーデンへようこそ。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-all hover:bg-primary-700 hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700"
          >
            ブログを読む
          </Link>
          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:text-primary-600 hover:border-primary-200 hover:translate-y-[-2px]"
          >
            プロフィールを見る
          </Link>
        </div>
      </section>

      {/* カードセクション */}
      <section className="mt-24 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6">
        <FeatureCard 
          title="🚀 Modern Tech" 
          description="Next.js 15 (App Router), React, TypeScript を使用して構築されています。" 
        />
        <FeatureCard 
          title="🎨 Tailwind CSS" 
          description="ユーティリティファーストなCSSフレームワークで、柔軟なデザインを実現。" 
        />
        <FeatureCard 
          title="📝 MDX Blog" 
          description="MarkdownにReactコンポーネントを埋め込めるMDXで記事を管理しています。" 
        />
      </section>
    </div>
  );
}

// カードコンポーネント（デザイン共通化）
function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary-200">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}