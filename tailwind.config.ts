import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#EFF2F5',
        black: '#0B1426',
        grey: '#768396',
        blue: {
          DEFAULT: '#0E52FC',
          600: '#E8F4FD',
        },
        green: {
          DEFAULT: '#0CBA83',
          600: '#EBF9F4',
        },
        red: '#F7324B',
        orange: '#FAA01C',
      },
    },
  },
  plugins: [],
};
export default config;
