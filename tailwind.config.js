/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        navi: "#053B50",
        blu: "#176B87",
        til: "#64CCC5",
        grey: "#EEEEEE"
      }
    },
    backgroundImage:{
      
    }
  },
  plugins: [],
};
