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
      keyframes: {
        floating: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(0, 10px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        float: "floating 4s infinite ease-in-out",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
