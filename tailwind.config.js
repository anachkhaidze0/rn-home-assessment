/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        container: {
          light: "#FFFFFF",
          dark: "#101011"
        },
        primary: {
          light: "#085F4C",
          dark: "#269B82"
        },
        background: {
          light: "#0307120D",
          dark: "#FFFFFF0D"
        },
        text: {
          light: "#030712",
          dark: "#FFFFFF"
        },
      }
      
    },
  },
  plugins: [],
}