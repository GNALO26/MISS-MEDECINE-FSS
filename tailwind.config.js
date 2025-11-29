/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',
        secondary: '#FFD700',
        accent: '#1a1a1a',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}