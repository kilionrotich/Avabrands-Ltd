/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d6b15e",
          soft: "#f2d88c",
          dark: "#b08a3e"
        },
        text: {
          light: "#e0e0e0"
        }
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214, 177, 94, 0.35), 0 20px 40px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};
