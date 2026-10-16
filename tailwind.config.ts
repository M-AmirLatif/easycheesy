import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",
          orangeDark: "#EA580C",
          yellow: "#FFC20E",
          yellowLight: "#FED766",
          charcoal: "#0E0E0E",
          surface: "#161616",
          surfaceLight: "#202020",
          surfaceBorder: "#2E2E2E",
          red: "#DC2626",
          redDark: "#B91C1C",
          offwhite: "#FDFBF7",
          muted: "#9E9E9E",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        script: ["var(--font-kaushan)", "cursive"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        flame: "flame 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        flame: {
          "0%": { transform: "scaleY(1) rotate(-1deg)" },
          "100%": { transform: "scaleY(1.12) rotate(1.5deg)" },
        },
      },
      boxShadow: {
        fiery: "0 0 25px -5px rgba(249, 115, 22, 0.4), 0 0 10px -2px rgba(255, 194, 14, 0.3)",
        "fiery-lg": "0 0 40px -5px rgba(249, 115, 22, 0.6), 0 0 20px -2px rgba(255, 194, 14, 0.4)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
