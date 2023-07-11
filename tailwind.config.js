/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        101: "1.01",
      },

      colors: {
        myBlack: "#141414",
        creamWhite: "#F9F4DA",
      },
    },
  },
  plugins: [],
};
