/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      white : "#F5F7FB",
      blue : "#326DB7",
      black : "#292D32",
      grey : "#878484",
      pureWhite : "#FFFFFF",
      transparent : "#00000000"
    }
  },
  plugins: [],
}
