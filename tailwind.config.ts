import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'k-yellow': '#FFD23F',
        'k-blue': '#4361EE',
        'k-orange': '#FF9F1C',
        'k-pink': '#F72585',
        'k-white': '#FFFFFF',
        'k-text': '#2B2D42',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
