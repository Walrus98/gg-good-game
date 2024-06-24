/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#F39200",
            foreground: "#000000",
          },
          focus: "#F39200",
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#F39200",
            foreground: "#FFFFFF",
          },
          focus: "#F39200",
        },
      },
    },
  })]
}

