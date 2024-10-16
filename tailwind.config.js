/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#0D6EB5",
        warning: "#E23131",
        darkGrey: "#2c2c2c",
        lightGrey: "#cdcdcd",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
