import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EC",
        sand: "#EFE7DA",
        espresso: "#2A2119",
        terracotta: "#B5652F",
        sage: "#8C9A7B",
        brass: "#B08D57",
        charcoal: "#211C18",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Playfair Display", "serif"],
        manrope: ["var(--font-manrope)", "Inter", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "section": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "section-mobile": ["1.75rem", { lineHeight: "1.25" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "zoom-slow": "zoomSlow 20s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomSlow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(135deg, #F7F3EC 0%, #EFE7DA 100%)",
        "gradient-dark": "linear-gradient(180deg, rgba(33,28,24,0.85) 0%, rgba(42,33,25,0.65) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
