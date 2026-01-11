import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F7AC3D',
        'primary-blue': '#0077B6',
        'dark-blue': '#264653',
        'light-blue': '#69CAFD',
        'green': '#87D858',
        'purple': '#A96DFF',
        'pink': '#AD606D',
      },
      fontFamily: {
        andika: ['Andika', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
