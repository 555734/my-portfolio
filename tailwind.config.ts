import type { Config } from "tailwindcss";

const config: Config = {
  // ↓ ここを修正: src/ を削除し、正しいパスを指定
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9efff',
          200: '#bce4ff',
          300: '#8ed3ff',
          400: '#59b6ff',
          500: '#2c9aff',
          600: '#1a7dff',
          700: '#1363e6',
          800: '#1751b8',
          900: '#184691',
          950: '#122c59',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #1a7dff, #2c9aff)',
        'gradient-dark': 'linear-gradient(to bottom, #184691, #122c59)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;