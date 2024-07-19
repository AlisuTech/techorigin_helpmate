// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: "jit",
//   // content: [
//   //   "./src/**/*.{js,jsx,ts,tsx}"
//   // ],
//   content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
//   presets: [require("@relume_io/relume-tailwind")],
//   theme: {
//     extend: {
//       fontFamily: {
//         Poppins: "Poppins",
//       },
//       colors: {
//         primary: "#3E82FC",
//         lightprimary: "#ECF3FF",
//         footer_bg: "#7091e6",
//       },
//       backgroundImage: {
//         Hero: "url('assets/img/Background.png')",
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
}