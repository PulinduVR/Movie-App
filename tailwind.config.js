/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
          primary: "#030014",
          secondary: "#151312",
          light: {
            100: "#d6c7ff",
            200: "#a8b5db",
            300: "#9CA4AB"
          },
          accent: "#AB8BFF",
          dark: {
            100: "#211f3d",
            200: "#0f0d23",
          }
    }
  }
  },
  plugins: [],
}