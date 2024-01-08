/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#FDC029',
        'accent-hover': '#E5AA18',
      },
      container: {
        center: true,
      },
      
    },
  },
  plugins: [],
}