/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '96px': '96px'
      },
      letterSpacing: {
        logo: '0.65em'
      },
      screens: {
        'xs': '450px'
      },
      colors: {
        'primary': '#FF6838'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
