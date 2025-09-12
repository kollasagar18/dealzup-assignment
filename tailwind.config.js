/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F55D4",
          dark: "#2443A8",
          light: "#E8EEFF"
        }
      },
      boxShadow: {
        soft: "0 6px 20px rgba(36, 67, 168, 0.1)"
      }
    },
  },
  plugins: [],
};
