/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        height: {
          "0%": { height: "100%" },
          "50%": { height: "20%" },
          "100%": { height: "100%" },
        },
        height1: {
          "0%": { height: "70%" },
          "50%": { height: "50%" },
          "100%": { height: "70%" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
        height: "height 1s ease-in-out infinite",
        height1: "height1 .5s ease-in-out infinite",
      },
      margin: {
        "96px": "96px",
      },
      letterSpacing: {
        logo: "0.65em",
      },
      screens: {
        xs: "450px",
      },
      colors: {
        primary: "#FF6838",
        secondary: "#FFBEA9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
