/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
