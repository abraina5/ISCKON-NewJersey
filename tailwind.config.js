/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FCECEC',
          DEFAULT: '#E24A4A',
          dark: '#C23B3B',
          darker: '#9E2E2E',
        },
        dark: '#2B0A0A',
        charcoal: '#3A0F0F',
        elevated: '#4A1616',
        muted: '#D2B7B7',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 8px 24px rgba(0,0,0,0.6), 0 0 15px rgba(218,165,32,0.2)',
      },
    },
  },
  plugins: [],
};
