/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        column: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      animation: {
        marquee: "move_rtl 6s linear infinite",
        slide_fwd_top:
          "slide_fwd_top 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        move_rtl: {
          "75%": { transform: "translate(-300%)" },
          "75.01%": { transform: "translate(100%)" },
        },
        slide_fwd_top: {
          "0%": {
            transform: "translateZ(0) translateY(0)",
          },
          "100%": {
            transform: "translateZ(160px) translateY(-100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
