import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorGrey: "#3A3A3A",
        colorYellow: "#FAE208",
        colorBlack: "#181818",
        colorWhite: "#E3DFCF",
        colorRed: "#EE3838",
      },
    },
  },
  plugins: [],
} satisfies Config;
