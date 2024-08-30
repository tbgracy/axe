/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EB5",
        warning: "#E23131",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
