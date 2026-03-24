import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf7f0',
        champagne: '#f6eee1',
        gold: '#b9925d',
        mocha: '#503729',
        rose: '#c9a696'
      },
      boxShadow: {
        glow: '0 18px 55px -30px rgba(185, 146, 93, 0.65)',
        soft: '0 18px 38px -28px rgba(80, 55, 41, 0.45)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 20% 10%, rgba(255,255,255,.95), transparent 40%), radial-gradient(circle at 80% 10%, rgba(201,166,150,.18), transparent 35%), linear-gradient(180deg, #fdf9f2 0%, #f8efe1 40%, #fcf7ee 100%)'
      }
    }
  },
  plugins: []
} satisfies Config;
