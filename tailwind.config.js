/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      animation: {
        spinSlow: "spin 3s linear infinite",
      },
      colors: {
        dark: "#171717",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
