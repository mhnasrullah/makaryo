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
      gray : "#878484",
      pureWhite : "#FFFFFF",
      lightBlue : "#EBF1F8",
      transparent : "#00000000"
    }
  },
  plugins: [],
}
