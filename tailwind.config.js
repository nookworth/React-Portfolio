/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    colors: {
      coquelicot: '#FF4A1C',
      eggplant: '#684551',
      manila: '#e7c9a9',
      'manila-dark': '#cba175',
      verdigris: '#75B9BE',
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
