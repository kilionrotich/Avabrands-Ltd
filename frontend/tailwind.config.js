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
        teal: {
          primary: "#1B5E6E",    // Dark teal from "AVA"
          secondary: "#26C6DA"   // Light teal from "BRANDS"
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
      },
      animation: {
        breathe: "breathe 4s ease-in-out infinite"
      },
      keyframes: {
        breathe: {
          "0%": {
            transform: "scale(1)",
            opacity: "1"
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        }
      }
    }
  },
  plugins: []
};
