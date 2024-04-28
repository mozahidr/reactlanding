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
      "primary": "#010851",
      "secondary": "#9A7AF1",
      "tartiary": "#707070",
      "pink": "#EE9AE5"
     }
    },
  },
  plugins: [],
};
export default config;
