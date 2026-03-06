import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        cream: '#FAF8F0',
        accent: '#0D9488',
        'accent-hover': '#0F766E',
        'accent-soft': '#F0FDFA',
        emergency: '#EF4444',
        'emergency-soft': '#FEF2F2',
        success: '#22C55E',
        'bg-dark': '#0F172A',
        'bg-secondary': '#EEE8D8',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.10)',
        card: '0 2px 12px rgba(15, 23, 42, 0.07)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
