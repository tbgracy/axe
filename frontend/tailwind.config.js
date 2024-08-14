/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#0D6EB5",
      white: '#fff',
      red: '#E23131'
    },
    extend: {},
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
