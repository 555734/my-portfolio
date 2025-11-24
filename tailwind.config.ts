import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 修正: 'Modern Indigo' パレット
        // 以前の青より少し紫が入った、深みと知性を感じる色です
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // メインカラー
          600: '#4f46e5', // ホバー時など
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b', // フッター背景など
        },
        // ニュートラルカラー（文字色などに使用）
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        // グラデーションも少し調整（インディゴ〜紫への変化でリッチに）
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #1e1b4b, #0f172a)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;