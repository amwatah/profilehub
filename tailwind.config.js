/** @type {import('tailwindcss').Config} */
const withAninmations = require("animated-tailwindcss")
module.exports = withAninmations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
