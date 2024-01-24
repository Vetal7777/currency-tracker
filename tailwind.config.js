/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'vtd-primary': colors.sky, // Light mode Datepicker color
        'vtd-secondary': colors.gray,
        'base-light': '#7E7E7E',
        'border-light': '#C7C7CB',
        'border-dark': '#4D4D4D',
        'nav-gray': '#EDE8ED',
        'base-red': '#EB5545'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
