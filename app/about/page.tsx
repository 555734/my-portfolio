export default function About() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>About Me</h1>
      <p>
        初めまして。エンジニアを目指して学習中の[あなたの名前]です。<br />
        このサイトはNext.jsとVercelを使って自作しました。
      </p>

      <h2>スキルセット</h2>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React / Next.js</li>
        <li>Git / GitHub</li>
      </ul>

      <h2>リンク</h2>
      <ul>
        <li>
          <a href="https://github.com/555734" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          {/* X (Twitter) などがあれば */}
          <a href="#">X (Twitter)</a>
        </li>
      </ul>
    </div>
  );
}