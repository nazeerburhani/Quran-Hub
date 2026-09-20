import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1026",
          800: "#16204a",
          900: "#0e1430",
          950: "#070b1d",
        },
        gold: {
          DEFAULT: "#dd9b4e",
          light: "#f6c88f",
          dark: "#9a6224",
        },
        emeralddeep: "#0d4a4b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(221, 155, 78, 0.35)",
        "glow-lg": "0 0 48px rgba(221, 155, 78, 0.45)",
        card: "0 8px 32px rgba(2, 6, 23, 0.35)",
      },
      animation: {
        "pulse-slow": "pulseSlow 2.6s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.08)", opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
