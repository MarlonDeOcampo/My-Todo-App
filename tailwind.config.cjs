/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Nunito Sans"],
    },
    extend: {
      colors: {
        primary: "#FFD473",
        secondary: "#333fff",
        tertiary: "#000fff",
        neutral: "#F3F3F3",
        light: "#ACACAD",
        dark: "#505050",
        "semi-dark": "#D2D2D2",
        link: "#6BCBE1",
        warning: "#ff9a00",
        error: "#FF0000",
        success: "#09bb97",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fill, 250px)",
      },
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
