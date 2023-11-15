/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          default: "#097fd9",
          dark: "#036dc6",
          light: "#0d8ce7",
        },
        secondary: {
          default: "#cf4b08",
          dark: "#d96309",
          light: "#e0720b",
        },

        white: "#FFFFFF",
      },
    },
    fontFamily: {
      urban: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
