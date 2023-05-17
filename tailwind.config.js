/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    letterSpacing: {
      logo: '0.65em'
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
