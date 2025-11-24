// ... (imports はそのまま)

export default async function BlogPost({ params }: Props) {
  const { slug } = await params; 
  const { meta, content } = getPostBySlug(slug);

  // ... (options はそのまま)

  return (
    // 修正: 記事ページ専用のラッパーを追加
    <div className="max-w-3xl mx-auto">
      <article className="py-8 bg-white md:p-10 md:rounded-xl md:shadow-sm md:border border-gray-100">
        <header className="mb-10 text-center border-b border-gray-100 pb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{meta.title}</h1>
          <time className="text-gray-500 block">{meta.date}</time>
        </header>
        
        {/* prose-primary を追加してリンク色などを統一カラーに */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-primary-600 hover:prose-a:text-primary-700">
          <MDXRemote source={content} options={options} />
        </div>
      </article>
      
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-primary-600 underline underline-offset-4">
          ← ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
}