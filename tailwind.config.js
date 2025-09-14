/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#22B0F9",
        brandSecondary: "#7948DB",
      },
      backgroundColor: {
        brandBg: "#22B0F9",
        brandSecondaryBg: "#7948DB",
      },
      screens: {
        "3xl": "2400px",
      },
      animation: {
        "smooth-bounce": "smoothBounce 3s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
      },
      keyframes: {
        smoothBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
