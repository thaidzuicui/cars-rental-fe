/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        blue50: "#C3D4E9",
        blue100: "#94A7CB",
        blue200: "#87ceeb",
        blue300: "#5CAFFC",
        blue400: "rgba(92, 175, 252, 0.30)",
        blue450: "rgba(53, 99, 233, 0.30)",
        blue500: "#3563E9",
        gray200: "#030338",
        gray300: "rgba(102, 102, 102, 0.25)",
        gray400: "#90A3BF",
        gray450: "rgba(195, 212, 233, 0.40)",
        gray500: "rgba(19, 19, 19, 0.6)",
        gray600: "rgba(26, 32, 44, 0.60);",
        gray700: "#3D5278",
        gray800: "#424B5C",
        gray850: "#293346",
        gray900: "#1A202C",
        gray950: "#1E2430",
        red400: "#ED3F3F",
        yellow200: "#FFFF00",
        yellow400: "#FBAD39",
        white0: "#FFFFFF",
        white100: "#F7F9FC",
        white200: "#F6F7F9",
      },
    },
  },
  plugins: [],
};
