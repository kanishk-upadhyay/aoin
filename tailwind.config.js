export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF8F4",
          100: "#FFEEE0",
          200: "#FFDCC1",
          300: "#FFC79D",
          400: "#FFB787",
          500: "#ea580c",
          600: "#D84A07",
          700: "#C23D06",
          800: "#A03104",
          900: "#482818",
        },
        surface: {
          50: "#FFF8F4",
          100: "#FFF3EB",
          200: "#FDEEE3",
          300: "#F9E5D8",
          400: "#F5DCC9",
          500: "#E8D3C0",
          600: "#D4BFA8",
          700: "#BEA890",
          800: "#A89178",
          900: "#52443D",
        },
        secondary: {
          50: "#F0F8F4",
          100: "#E7F3EE",
          200: "#D4E8DF",
          300: "#B8D9CB",
          400: "#9AC9B5",
          500: "#7CB89F",
          600: "#5FA688",
          700: "#4A8770",
          800: "#356858",
          900: "#0F3528",
        },
        tertiary: {
          50: "#F5F4FC",
          100: "#EBE9FC",
          200: "#D8D4F5",
          300: "#C3BEEB",
          400: "#ADA6DF",
          500: "#978FD3",
          600: "#7F76C0",
          700: "#675EA9",
          800: "#4F4792",
          900: "#362F5C",
        },
      },
      borderRadius: {
        m3: "28px",
        "m3-lg": "32px",
        "m3-xl": "36px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        m3: "0 1px 2px 0 rgb(0 0 0 / 0.3), 0 1px 3px 1px rgb(0 0 0 / 0.15)",
        "m3-md":
          "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 4px 8px 3px rgb(0 0 0 / 0.15)",
        "m3-lg":
          "0 2px 6px 2px rgb(0 0 0 / 0.15), 0 8px 12px 6px rgb(0 0 0 / 0.15)",
      },
    },
  },
  plugins: [],
};
