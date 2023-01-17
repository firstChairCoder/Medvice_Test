/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl": 28,
      },
      colors: {
        light: colors.gray[200],
        dark: colors.black,
        green_50: "#6EE7B7",
        red_50: "#FDA4AF",
      },
    },
  },
  plugins: [],
};
