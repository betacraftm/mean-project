/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "san-serif"],
        beautique: ["beautique", "serif"],
      },
    },
  },
  plugins: [],
};
