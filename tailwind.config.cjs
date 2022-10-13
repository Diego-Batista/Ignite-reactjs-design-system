/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      colors: {
        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-400': '#7C7C8A',
        'gray-200': '#C4C4CC',
        'gray-100': '#E1E1E6',

        'brand-500': '#8257E6',
        'brand-300': '#9D73FF',
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
