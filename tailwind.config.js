/** @type {import('tailwindcss').Config} */
// const { nextui } = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
 
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
    nextui()
  ],
  
});
