/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#ECF3FF",
        footer_bg: "#7091e6",
      },
      backgroundImage: {
        Hero: "url('assets/img/Background.png')",
      },
    },
  },
  plugins: [],
}

