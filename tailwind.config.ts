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
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
