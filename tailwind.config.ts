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
        // Brand tokens - updated color scheme
        primary: "#556B2F", // olive green
        secondary: "#008080", // teal
        accent: "#D69A3E", // gold
        charcoal: "#333333", // text
        "gray-light": "#F4F4F4", // background
        olive: "#556B2F", 
        teal: "#008080",
        gold: "#D69A3E",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
      },
      backgroundImage: {
        "geometric-pattern": "url('/pattern.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
