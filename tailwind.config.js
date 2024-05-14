/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rale:['"Raleway"', 'sans-serif'],
        neon:['"Tilt Neon"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
