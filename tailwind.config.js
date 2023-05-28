/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tittle: "Raleway",
      },
      animation: {
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        slowfade: "slowfade 1.5s ease-in-out",
        hero: "animate 2s infinite ease alternate",
      },
      keyframes: {
        animate: {
          to: {
            transform: "translateY(20px)",
          },
        },
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
