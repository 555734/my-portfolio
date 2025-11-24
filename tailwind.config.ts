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
        // 画像を参考に定義した青色のパレット
        primary: {
          50: '#eef7ff',
          100: '#d9efff',
          200: '#bce4ff',
          300: '#8ed3ff',
          400: '#59b6ff',
          500: '#2c9aff', // メインの鮮やかな青
          600: '#1a7dff',
          700: '#1363e6',
          800: '#1751b8',
          900: '#184691', // フッターなどに使う濃い青
          950: '#122c59',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // グラデーション用の定義を追加
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #1a7dff, #2c9aff)',
        'gradient-dark': 'linear-gradient(to bottom, #184691, #122c59)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;