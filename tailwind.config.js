module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_51: "#fafafa",
        gray_500: "#a1a1a1",
        indigo_900_0c: "#1b3a770c",
        bluegray_100: "#cbd4e6",
        indigo_A200: "#605dec",
        black_900_0c: "#0000000c",
        green_A200: "#5bd6c0",
        gray_50: "#f6f5fd",
        teal_400: "#22c3a6",
        bluegray_900: "#26263f",
        indigo_200: "#a1afcc",
        bluegray_500: "#6d7391",
        indigo_A700: "#2926d8",
        black_900: "#000000",
        bluegray_400: "#7b8db0",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius4: "4px",
        radius05: "0.5px",
        radius12: "12px",
        radius50: "50%",
      },
      fontFamily: { nunitosans: "Nunito Sans" },
      boxShadow: {
        bs: "0px 12px  24px 0px #1b3a770c",
        bs1: "0px 12px  32px 0px #0000000c",
      },
      backgroundImage: { gradient: "linear-gradient(180deg ,#605dec,#2926d8)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
