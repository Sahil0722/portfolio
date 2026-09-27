import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06080f",
        surface: "#0c1020",
        primary: "#8ab4ff",
        secondary: "#8d7bff",
        muted: "#94a3b8"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)"
      },
      boxShadow: {
        glow: "0 0 80px rgba(138,180,255,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
