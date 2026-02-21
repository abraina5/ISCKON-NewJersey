/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#DFA5A5',
          DEFAULT: '#E24A4A',
          dark: '#C23B3B',
          darker: '#9E2E2E',
        },
        dark: '#d8cfbf',
        charcoal: '#d1c7b5',
        elevated: '#c9beaa',
        muted: '#5a5349',
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
