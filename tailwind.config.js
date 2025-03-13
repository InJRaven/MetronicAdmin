module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,scss}"],
  safelist: [
    {
      // Allow dynamic classes for colors
      pattern:
        /(bg|text|border)-(light|primary|success|warning|danger|info|dark)(-light|-active|-clarity|-inverse)?/,
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        museo: ["Museo Sans Display", "sans-serif"],
        "museo-extra": ["Museo Sans Display ExtraBlack", "sans-serif"],
        "ki-duotone": "ki-duotone",
        "ki-filled": "ki-filled",
        "ki-outline": "ki-outline",
        "ki-solid": "ki-solid",
      },
      fontSize: {
        "h-50": ["5rem", { lineHeight: "5.4", fontWeight: "700" }],
        "h-44": ["4.4rem", { lineHeight: "5.6", fontWeight: "700" }],
        "h-38": ["3.8rem", { lineHeight: "3.8", fontWeight: "600" }],
        "h-34-bold": ["3.4rem", { lineHeight: "4.2", fontWeight: "700" }],
        "h-34": ["3.4rem", { lineHeight: "3.4", fontWeight: "600" }],
        "h-30": ["3rem", { lineHeight: "3", fontWeight: "600" }],
        "h-26": ["2.6rem", { lineHeight: "2.6", fontWeight: "600" }],
        "h-24": ["2.4rem", { lineHeight: "2.4", fontWeight: "600" }],
        "h-22-bold": ["2.2rem", { lineHeight: "3.8", fontWeight: "500" }],
        "h-22": ["2.2rem", { lineHeight: "2.2", fontWeight: "600" }],
        "b-20-30": ["2rem", { lineHeight: "3", fontWeight: "500" }],
        "b-20-20": ["2rem", { lineHeight: "2", fontWeight: "500" }],
        "b-20-20-semibold": ["2rem", { lineHeight: "3", fontWeight: "600" }],
        "b-18-30": ["1.8rem", { lineHeight: "3", fontWeight: "500" }],
        "b-18-25-light": ["1.8rem", { lineHeight: "2.5", fontWeight: "300" }],
        "b-18-25": ["1.8rem", { lineHeight: "2.5", fontWeight: "500" }],
        "b-18-25-semibold": [
          "1.8rem",
          { lineHeight: "2.5", fontWeight: "600" },
        ],
        "b-18-18": ["1.8rem", { lineHeight: "1.8", fontWeight: "500" }],
        "b-18-18-semibold": [
          "1.8rem",
          { lineHeight: "1.8", fontWeight: "600" },
        ],
        "b-16-25": ["1.6rem", { lineHeight: "2.5", fontWeight: "500" }],
        "b-16-25-semibold": [
          "1.6rem",
          { lineHeight: "2.5", fontWeight: "600" },
        ],
        "b-16-16": ["1.6rem", { lineHeight: "1.6", fontWeight: "400" }],
        "b-16-16-medium": ["1.6rem", { lineHeight: "1.6", fontWeight: "500" }],
        "b-16-16-semibold": [
          "1.6rem",
          { lineHeight: "1.6", fontWeight: "600" },
        ],
        "b-15-24": ["1.5rem", { lineHeight: "2.4", fontWeight: "400" }],
        "b-15-24-medium": ["1.5rem", { lineHeight: "2.4", fontWeight: "500" }],
        "b-15-16": ["1.5rem", { lineHeight: "1.6", fontWeight: "400" }],
        "b-15-16-medium": ["1.5rem", { lineHeight: "1.6", fontWeight: "500" }],
        "b-15-16-semibold": [
          "1.5rem",
          { lineHeight: "1.6", fontWeight: "600" },
        ],
        "b-14-22": ["1.4rem", { lineHeight: "2.2", fontWeight: "400" }],
        "b-14-22-medium": ["1.4rem", { lineHeight: "2.2", fontWeight: "500" }],
        "b-14-14": ["1.4rem", { lineHeight: "1.4", fontWeight: "400" }],
        "b-14-14-medium": ["1.4rem", { lineHeight: "1.4", fontWeight: "500" }],
        "b-14-14-semibold": [
          "1.4rem",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
        "b-14-14-bold": ["1.4rem", { lineHeight: "1.4", fontWeight: "700" }],
        "b-13-20": ["1.3rem", { lineHeight: "2", fontWeight: "400" }],
        "b-13-20-medium": ["1.3rem", { lineHeight: "2", fontWeight: "500" }],
        "b-13-14": ["1.3rem", { lineHeight: "1.4", fontWeight: "400" }],
        "b-13-14-medium": ["1.3rem", { lineHeight: "1.4", fontWeight: "500" }],
        "b-13-14-semibold": [
          "1.3rem",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
        "b-13-14-bold": ["1.3rem", { lineHeight: "1.4", fontWeight: "700" }],
        "b-12-12": ["1.2rem", { lineHeight: "1.2", fontWeight: "400" }],
        "b-12-12-medium": ["1.2rem", { lineHeight: "1.2", fontWeight: "500" }],
        "b-12-12-semibold": [
          "1.2rem",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        "b-12-12-bold": ["1.2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "b-11-12": ["1.1rem", { lineHeight: "1.2", fontWeight: "400" }],
        "b-11-12-medium": ["1.1rem", { lineHeight: "1.2", fontWeight: "500" }],
        "b-11-12-semibold": [
          "1.1rem",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        "b-10-10": ["1.0rem", { lineHeight: "1.0", fontWeight: "400" }],
        "b-10-10-medium": ["1.0rem", { lineHeight: "1.0", fontWeight: "500" }],
        "b-10-10-semibold": [
          "1.0rem",
          { lineHeight: "1.0", fontWeight: "600" },
        ],
        "b-9-10": ["0.9rem", { lineHeight: "1.0", fontWeight: "400" }],
        "b-9-10-medium": ["0.9rem", { lineHeight: "1.0", fontWeight: "500" }],
        "b-9-10-semibold": ["0.9rem", { lineHeight: "1.0", fontWeight: "600" }],
        "3xs": [
          "0.9rem", // 9px
          {
            lineHeight: "1.1rem", // 11px
          },
        ],
        "2xs": [
          "1rem", // 10px
          {
            lineHeight: "1.2rem", // 12px
          },
        ],
        xs: [
          "1.1rem", // 11px
          {
            lineHeight: "1.2rem", // 12px
          },
        ],
        sm: [
          "1.2rem",
          {
            lineHeight: "1.2rem",
          },
        ],
        md: ["1.3rem", { lineHeight: "1.4" }],
        base: ["1.4rem", { lineHeight: "1.4" }],
        lg: ["1.8rem", { lineHeight: "1.75" }],
        xl: ["2rem", { lineHeight: "100%" }],
        "1.5xl": [
          "2.2rem", // 22px
          {
            lineHeight: "2.9rem", // 29px
          },
        ],
        "2.5xl": [
          "2.6rem", // 26px
          {
            lineHeight: "3.4rem", // 34px
          },
        ],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        gray: {
          100: "var(--tw-gray-100)",
          200: "var(--tw-gray-200)",
          300: "var(--tw-gray-300)",
          400: "var(--tw-gray-400)",
          500: "var(--tw-gray-500)",
          600: "var(--tw-gray-600)",
          700: "var(--tw-gray-700)",
          800: "var(--tw-gray-800)",
          900: "var(--tw-gray-900)",
        },
        primary: {
          DEFAULT: "var(--tw-primary)",
          active: "var(--tw-primary-active)",
          light: "var(--tw-primary-light)",
          clarity: "var(--tw-primary-clarity)",
          inverse: "var(--tw-primary-inverse)",
        },
        success: {
          DEFAULT: "var(--tw-success)",
          active: "var(--tw-success-active)",
          light: "var(--tw-success-light)",
          clarity: "var(--tw-success-clarity)",
          inverse: "var(--tw-success-inverse)",
        },
        warning: {
          DEFAULT: "var(--tw-warning)",
          active: "var(--tw-warning-active)",
          light: "var(--tw-warning-light)",
          clarity: "var(--tw-warning-clarity)",
          inverse: "var(--tw-warning-inverse)",
        },
        danger: {
          DEFAULT: "var(--tw-danger)",
          active: "var(--tw-danger-active)",
          light: "var(--tw-danger-light)",
          clarity: "var(--tw-danger-clarity)",
          inverse: "var(--tw-danger-inverse)",
        },
        info: {
          DEFAULT: "var(--tw-info)",
          active: "var(--tw-info-active)",
          light: "var(--tw-info-light)",
          clarity: "var(--tw-info-clarity)",
          inverse: "var(--tw-info-inverse)",
        },
        dark: {
          DEFAULT: "var(--tw-dark)",
          active: "var(--tw-dark-active)",
          light: "var(--tw-dark-light)",
          clarity: "var(--tw-dark-clarity)",
          inverse: "var(--tw-dark-inverse)",
        },
        secondary: {
          DEFAULT: "var(--tw-secondary)",
          active: "var(--tw-secondary-active)",
          light: "var(--tw-secondary-light)",
          clarity: "var(--tw-secondary-clarity)",
          inverse: "var(--tw-secondary-inverse)",
        },
        light: {
          DEFAULT: "var(--tw-light)",
          active: "var(--tw-light-active)",
          light: "var(--tw-light-light)",
          clarity: "var(--tw-light-clarity)",
          inverse: "var(--tw-light-inverse)",
        },
        brand: {
          DEFAULT: "var(--tw-brand)",
          active: "var(--tw-brand-active)",
          light: "var(--tw-brand-light)",
          clarity: "var(--tw-brand-clarity)",
          inverse: "var(--tw-brand-inverse)",
        },
        coal: {
          100: "#15171C",
          200: "#13141A",
          300: "#111217",
          400: "#0F1014",
          500: "#0D0E12",
          600: "#0B0C10",
          black: "#000000",
          clarity: "rgba(24, 25, 31, 0.50)",
        },
      },
      zIndex: {
        1: "1",
        5: "5",
        15: "15",
        25: "25",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      height: {
        header: "var(--tw-header-height)",
      },
      //work with plugin
      boxShadow: {
        light: {
          default: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)",
          light: "0px 3px 12px 0px rgba(0, 0, 0, 0.03)",
          primary: "0px 4px 12px 0px rgba(40, 132, 239, 0.35)",
          success: "0px 4px 12px 0px rgba(53, 189, 100, 0.35)",
          danger: "0px 4px 12px 0px rgba(241, 65, 108, 0.35)",
          info: "0px 4px 12px 0px rgba(114, 57, 234, 0.35)",
          warning: "0px 4px 12px 0px rgba(246, 192, 0, 0.35)",
          dark: "0px 4px 12px 0px rgba(37, 47, 74, 0.35)",
          widget: " 0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
          input:" 0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
          calendar: "0px 10px 14px 0px rgba(15, 42, 81, 0.03)",
        },
        dark: {
          default: "none",
          light: "none",
          primary: "none",
          success: "none",
          danger: "none",
          info: "none",
          warning: "none",
          dark: "none",
          widget: "none",
          calendar: "none",
        },
      },
     
      backgroundImage: {
        "auth-light": "url('../img/auth_light.jpg')",
        "auth-dark": "url('../img/auth_dark.jpg')",
      },
      input: {
        xs: {
          px: "0.8rem",
          py: "0.6rem",
        },
        sm: {
          px: "1rem",
        },
        md: {
          px: "1.2rem",
        },
        lg: {
          px: "1.2rem",
        },
      },
    },
  },

  plugins: [
    function ({ addBase }) {
      addBase({
        html: { fontSize: "62.5%" }, // 1rem = 10px
      });
    },
    require("./plugins/BoxShadowPlugin"),
    require("./plugins/InputSizePlugin"),
  ],
};
