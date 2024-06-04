import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#282a2e",
        secondary: "#1a1c1e",
        tertiary: "#0a0c0d",
        lightgray: "#323436",
        primaryGreen: "#54e528",
        secondaryGreen: "#14a73c",
        fillerGray1: "#131516",
        fillerGray2: "#212326",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        anek: ["var(--font-anek-gurmukhi)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
