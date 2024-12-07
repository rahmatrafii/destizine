import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-1": "#4475F2",
        "main-2": "#789DFC",
        "main-3": "#D9E3FC",
        "text-1": "#18191F",
        "text-2": "#474A57",
        "text-3": "#969BAB",
      },
    },
  },
  plugins: [],
};
export default config;
