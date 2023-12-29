module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { A200: "#f9ff00", A400: "#fff400" },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        gray: { 50: "#fbfbfb" },
      },
      fontFamily: { lalezar: "Lalezar", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
