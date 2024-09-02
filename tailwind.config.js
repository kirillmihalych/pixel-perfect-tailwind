/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '520px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
      colors: {
        highlight: '#6202FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.625rem', '1.15'],
        '5.5xl': ['3.375rem', '1'],
      },
    },
  },
  plugins: [],
}
