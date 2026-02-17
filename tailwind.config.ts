import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A43',
        teal: '#0F766E',
        sky: '#F0F9FF'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 42, 67, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
