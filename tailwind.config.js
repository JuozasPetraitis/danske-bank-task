/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        Tektur: "Tektur",
        SedgwickAveDisplay: "SedgwickAveDisplay",
        TitilliumWeb: "TitilliumWeb",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.1, -0.6, 0.2, 0)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.1, -0.6, 0.2, 0)",
          },
        },
      },

      animation: {
        "spin-slow": "bounce 6s infinite",
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, addUtilities }) {
      addUtilities({
        ".custom-scrollbar::-webkit-scrollbar": {
          height: "12px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 5px grey",
          borderRadius: "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#000",
          borderRadius: "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#000000a8",
        },
      });
    },
  ],
};
