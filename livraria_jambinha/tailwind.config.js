const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}