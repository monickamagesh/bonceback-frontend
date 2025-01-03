/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ed3849", // Primary color
          dark: "#d23141", // Dark variant
          light: "#f4e5ec", // Light variant
          "normal-active": "#6A00A7", // Normal active variant
          "light-active": "#D9B0F1", // Light active variant
        },
        text: {
          dark: "#0f172a", // Dark text
          light: "#64748b", // Light text
        },
        neutral: {
          light: "#F0F0F0", // Neutral light active
          extra: "#f8fafc", // Extra light
        },
        white: "#ffffff", // White
      },
    },
  },
  plugins: [],
};
