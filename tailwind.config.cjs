/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "secondary": "#000000",
        "danger": "#ff0000",
        "success": "#00ff00",
        "warning": "#ffff00",
      }
    },
  },
  plugins: [],
}
