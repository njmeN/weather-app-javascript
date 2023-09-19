/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'sans-serif'] },
        colors:{
          darkblue:'#06283D',
          lightBlue:'#dff6ff',
        }
    },
    
  },
  plugins: [],
}

