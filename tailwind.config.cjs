/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    
    extend: {

     backgroundImage:{
        app: 'url(app-bg.png)'
     },

      colors:{
        ignite: {
          500:  '#129E57'
        },

        gray:{
          300: '#9D8D99',
          600: '#323238',
          100: '#E1E1E6',
          800: '#202024,'
          
        },


        yellow:{
          500: '#F7DD43',
          700: '#E5CD3D',
        },
   
      },
    },
  },
  plugins: [],
}
