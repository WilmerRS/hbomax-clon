/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'hbo-black': '#010101',
        'hbo-purple': '#24082B',
      }
    },
  },
  plugins: [],
}
