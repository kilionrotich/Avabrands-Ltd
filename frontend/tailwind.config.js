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
          primary: "#0D3B66",    // Dark navy blue
          secondary: "#2E7D9A"   // Medium blue
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
        breathe: "breathe 4s ease-in-out infinite",
        "color-shift": "colorShift 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        "color-pulse": "colorShift 6s ease-in-out infinite, pulseSlow 2.2s ease-in-out infinite"
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
        },
        colorShift: {
          "0%, 100%": {
            color: "#2E7D9A"
          },
          "33%": {
            color: "#0D3B66"
          },
          "66%": {
            color: "#26C6DA"
          }
        },
        pulseSlow: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.05)"
          }
        }
      }
    }
  },
  plugins: []
};
