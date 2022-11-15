/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:
        {
          transparent: 'transparent',
          primary: '#0169FF',
          secondary: '#9fb3d1',
          dark: '#121212'
        }
      },
     
    },
    plugins: [],
}