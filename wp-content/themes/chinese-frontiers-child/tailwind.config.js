const forms = require("@tailwindcss/forms");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.php",
    "./template-parts/**/*.php",
    "./*.php",
    "./**/*.php",
    "./inc/**/*.php",
    "./inc/*.php",
    "./src/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "Arial", "sans-serif"],
      handwrite: ["Julee", "cursive"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      indigo: "#489698",
      white: colors.white,
      black: colors.black,
      gray: "#212529",
      blue: "#0047A9",
      green: "#1DA89C",
      red: "#B3261E",
      yellow: "#EFB823",
      orange: "#fb923c",
      sky: "#38bdf8",
      indigo: "#818cf8",
      purple: "#a855f7",
      pink: "#f472b6",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        green: {
          100: "#96b9ba",
          600: "#b4c851",
          700: "#009597",
          800: "#356466",
          hover: "#8f8c31",
          DEFAULT: "#1DA89C",
        },
        blue: {
          hover: "#003989",
          DEFAULT: "#0047A9",
        },
        beige: {
          DEFAULT: "#DAC9B1",
          500: "#DAC9B1",
          600: "#ab9c88",
        },
        gray: {
          DEFAULT: "#333333",
          100: "#e7e7e7",
          200: "#CFCFCF",
          300: "#8C8C8C",
          400: "#747474",
          800: "#333333",
          900: "#212529",
        },
        yellow: {
          DEFAULT: "#EFB823",
          hover: "#e9b017",
        },
        orange: {
          DEFAULT: "#fb923c",
        },
        sky: {
          DEFAULT: "#38bdf8",
        },
        indigo: {
          DEFAULT: "#818cf8",
        },
        purple: {
          DEFAULT: "#a855f7",
        },
        pink: {
          DEFAULT: "#f472b6",
        },
      },
      boxShadow: {
        cta: "0 0 0 1px #000000, inset 0 -3px 3px rgba(0, 0, 0, 0.42), inset 0 3px 3px rgba(255, 226, 132, 0.72)",
        "cta-hover":
          "0 0 0 1px #000000, inset 0 -1px 1px rgba(0, 0, 0, 0.42), inset 0 1px 1px rgba(255, 226, 132, 0.72)",
      },
      textColor: {
        primary: colors.gray,
        secondary: colors.blue,
        success: colors.green,
        error: colors.red,
      },
      textShadow: {
        sm: "0 4px 4px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      zIndex: {
        "-3": -3,
        100: 100,
        999: 999,
      },
      maxWidth: {
        screen: "100vw",
        min: "min-content",
        max: "max-content",
        xxs: "15.5rem",
        cta: "300px",
        fhd: "1920px",
      },
      height: {
        90: "22.5rem",
        full: "100%",
      },
      inset: {
        "-6": "-1.5rem",
      },
      fontSize: {
        xxs: "0.5rem",
        "4xl": "2rem",
      },
      transitionDelay: {
        none: "0ms",
        400: "400ms",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: 0,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    forms,
    require("tailwindcss"),
    require("autoprefixer"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
