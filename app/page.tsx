// ... (imports)

export default function Home() {
  return (
    // 背景に薄い青色のパターンを追加してリッチ感を出す（オプション）
    <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
      {/* ヒーローセクション */}
      <section className="w-full max-w-3xl space-y-8 text-center px-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <br className="hidden sm:inline" />
            {/* テキストのグラデーションを新しいパレットに合わせる */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              My Portfolio
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            エンジニアとしての活動記録と、技術ブログを掲載しています。
            Next.jsとモダンなウェブ技術で構築された、私のデジタルガーデンへようこそ。
          </p>
        </div>
        
        {/* アクションボタン群 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/blog"
            // ボタンの色を新しいprimaryカラーに変更
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700"
          >
            ブログを読む
          </Link>
          {/* ... (プロフィールを見るボタンはそのまま) */}
        </div>
      </section>

      {/* ... (特徴・スキルセクションはそのまま) */}
    </div>
  );
}