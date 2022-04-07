module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1D1D1D",
        textColor: "#e7e5e4",
        borderColor: "#525252",
        secondColor: "#F65F54",
        lineColor: "#383838",
        headerColor: "#121212",
        starColor: "#ffd700",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { transform: "translateY(-100%); opacity: 0" },
          "100%": { transform: "translateY(0); opacity:1" },
        },
        zoomIn: {
          "0%, 100%": {},
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeIn: "fadeIn 0.4s ease",
        zoomIn: "zoomIn 1s ease",
      },
      variants: {
        display: ["responsive", "group-hover", "group-focus"],
      },
    },
  },
  plugins: [],
};
