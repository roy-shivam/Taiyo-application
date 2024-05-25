/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        logoAccent: "#454a73",
        accent1: "#57cbf2",
        accent2: "#e76c82",
      },
      backgroundColor: {
        primary: "#eafcff",
        secondary: "#7f0bf0",
        accent1: "#57cbf2",
        accent2: "#e76c82",
        accentPrimary: "#f97f29",
      },
      colors: {
        accentSecondary: "#19283f",
        accentGreen: "#cce16a",
        accentGrey: "#f7f7f7",
        fontBlue: "#5f6187",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
