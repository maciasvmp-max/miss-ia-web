/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071a33',
        night: '#020813',
        cream: '#f8f3ee',
        peach: '#eeb085',
        mist: '#d8e8ff',
      },
      fontFamily: {
        heading: ["'Public Sans'", 'sans-serif'],
        accent: ["'Instrument Serif'", 'serif'],
        body: ["'Barlow'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
