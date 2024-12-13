import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "834px",
      xl: "1240px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        colorGrey: "#3A3A3A",
        colorYellow: "#FAE208",
        colorBlack: "#181818",
        colorWhite: "#E3DFCF",
        "colorWhite-var1": "#EEEAEA",
        colorRed: "#EE3838",
        colorLightGrey: "#CECECE",
        "colorGrey-var1": "#201F22",
        "colorGrey-var2": "#3A393E",
      },
    },
  },
  plugins: [],
} satisfies Config;
