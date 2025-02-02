import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#A31D1D",
          foreground: "#000000", // Corrected without `color:`
        },
        background: "#A31D1D",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
