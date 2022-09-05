/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#23272A",
        midGray: "#2C2F33",
        lightGray: "#36393E",
        textGray: "#424549",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

};
