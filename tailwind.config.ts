import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "solarized-dark": "#073642",
        "solarized-dark-menu": "#002b36",
        "solarized-light": "#FDF6E3",
        "solarized-light-menu": "#EEE8D5",
      },
      textColor: {
        "solarized-dark": "#FDF6E3",
        "solarized-light": "#002B36",
      },
      colors: {
        "solarized-active": "#268BD2",
        "solarized-hover": "#268BD2",
      },
    },
  },
  plugins: [],
};
export default config;
