/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tedBlack: "#121212",
        tedGray: "#1A1A1A",
        tedRed: "#E62B1E",
        lightText: "#F3F3F3",
        subText: "#A0A0A0",
        themeColor: "#133a41",
        gold: "#e6b800",
        themeGold: "#D1A64B",
      },
      backdropBlur: {
        md: "10px",
      },
      backgroundImage: {
        service: "url('../assets/service.svg')",
      },
    },
  },
  plugins: [],
};
