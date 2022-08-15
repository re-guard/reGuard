/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
       
      },
      colors:
      {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: '#0169FF',
      }
    },
    plugins: [],
}