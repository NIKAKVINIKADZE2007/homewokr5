/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'laptop-xl': '1440px',
      'phone-small': '390px',
    },
    fontFamily: {
      manrope: ['manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
