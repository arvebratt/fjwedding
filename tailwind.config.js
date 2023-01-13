/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const rem = (px) => `${px / 16}rem`;

const boxShadow = {
  none: "0 0 0 0 rgba(0, 0, 0, 0)",
  button: `${rem(3)} ${rem(3)} 0 0 rgba(0, 0, 0, 0)`,
  "button-hover": `${rem(2)} ${rem(2)} 0 0 rgba(0, 0, 0, 0)`,
  card: `${rem(10)} ${rem(10)} 0 0 rgba(0, 0, 0, 0)`,
};

const fontFamily = {
  sans: [
    "Nunito",
    "Kalam",
    "Arial",
    "Franklin Gothic Medium",
    "Franklin Gothic",
    "ITC Franklin Gothic",
    "sans-serif",
  ],
};

module.exports = {
  content: [
    // add this lines
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow,
    fontFamily,
    extend: {},
  },
  plugins: [],
};
