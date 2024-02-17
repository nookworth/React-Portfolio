/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    colors: {
      'charcoal': '#4F4B45',
      coquelicot: '#FF4A1C',
      eggplant: '#684551',
      'eggplant-light': '#875969',
      'green-muted': '#45685C',
      manila: '#e7c9a9',
      'manila-dark': '#cba175',
      'onyx': '#424242',
      'papaya': '#F1E3D3',
      verdigris: '#75B9BE',
      'verdigris-dark': '#52A7AE',
    },
    extend: {
      spacing: {
        '1/5': '20%',
        '1/3': '33.3%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
  plugins: [],
}
