import type { Config } from "tailwindcss";

/**
 * QuranHub palette — sampled from the brand logo (public/images/logo.jpg).
 *
 * - brand: teal scale anchored on the logo teal #164449
 * - gold: accent scale anchored on #D9A441 (CTA bg with dark-teal text, 7.2:1)
 * - sand / ink / night: light & dark theme surfaces and text
 * - peach: logo accent, decorative only
 *
 * Contrast (WCAG AA, verified):
 *   ink #123332 on sand-50 #FAF6EF ............ 12.6:1
 *   night-950 #0A1F1E on gold-400 #D9A441 ..... 7.2:1
 *   sand-100 #F5EFE3 on night #0A1F1E ......... 14.9:1
 *   ink-soft #4E6B66 on sand-50 ............... 5.4:1
 *   night-soft #A8C4BB on night .............. 9.2:1
 * Gold is NEVER body text on light — CTA bg (dark-teal text), borders,
 * icons, and dark-theme highlights only.
 */
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
        brand: {
          50: "#eef5f4",
          100: "#d9e9e7",
          200: "#b3d3d0",
          300: "#84b5b1",
          400: "#54918c",
          500: "#37756f",
          600: "#245d58",
          700: "#1c4b46",
          800: "#164449",
          900: "#102f32",
          950: "#0a1f1e",
        },
        gold: {
          50: "#fbf6ea",
          100: "#f6ead0",
          200: "#eed39d",
          300: "#e4ba68",
          400: "#d9a441",
          500: "#c48f2f",
          600: "#a57525",
          700: "#845c1f",
          800: "#6b4a1d",
          900: "#573d1b",
        },
        peach: "#f2a968",
        sand: {
          50: "#faf6ef",
          100: "#f5efe3",
          200: "#e9dfc9",
        },
        ink: {
          DEFAULT: "#123332",
          soft: "#4e6b66",
        },
        night: {
          DEFAULT: "#0a1f1e",
          deep: "#07211f",
          soft: "#0b2422",
          muted: "#a8c4bb",
        },
        wa: "#25d366",
        waDark: "#128c4b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(217, 164, 65, 0.35)",
        "glow-lg": "0 0 48px rgba(217, 164, 65, 0.5)",
        card: "0 8px 32px rgba(7, 33, 31, 0.30)",
        "card-light": "0 10px 36px rgba(18, 51, 50, 0.10)",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "floatSlow 11s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
