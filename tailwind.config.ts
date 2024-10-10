import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
        },
        tertiary: {
          DEFAULT: "rgb(var(--color-tertiary) )",
        },
      },
    },
  },
  plugins: [],
};
export default config;
