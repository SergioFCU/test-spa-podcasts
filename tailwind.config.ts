import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px"
      },
      boxShadow: {
        "left-right-bottom":
          "-2px 2px 2px rgba(0, 0, 0, 0.1), 2px 2px 2px rgba(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: []
};
export default config;
