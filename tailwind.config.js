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
        museo: ['Museo Sans Display', 'sans-serif'],
        'museo-extra': ['Museo Sans Display ExtraBlack', 'sans-serif'],
        "ki-duotone": "ki-duotone",
        "ki-filled": "ki-filled",
        "ki-outline": "ki-outline",
        "ki-solid": "ki-solid",
      },
      fontSize: {
        "heading-sm": [
          "2.2rem",
          { lineHeight: "2.2rem", letterSpacing: "-0.022rem" },
        ],
        "heading-md": [
          "2.4rem",
          { lineHeight: "2.4rem", letterSpacing: "-0.024rem" },
        ],
        "heading-lg": [
          "2.6rem",
          { lineHeight: "2.6rem", letterSpacing: "-0.052rem" },
        ],
        "heading-xl": [
          "3rem",
          { lineHeight: "3rem", letterSpacing: "-0.06rem" },
        ],
        "heading-2xl": [
          "3.4rem",
          { lineHeight: "3.4rem", letterSpacing: "-0.068rem" },
        ],
        "heading-3xl": [
          "3.8rem",
          { lineHeight: "3.8rem", letterSpacing: "-0.076rem" },
        ],
        "heading-4xl": [
          "4.4rem",
          { lineHeight: "5.6rem", letterSpacing: "-0.088rem" },
        ],
        "heading-5xl": [
          "5rem",
          { lineHeight: "5.6rem", letterSpacing: "-0.1rem" },
        ],
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
        md: ["1.3rem", { lineHeight: "1.4rem" }],
        base: ["1.4rem", { lineHeight: "1.4rem" }],
        lg: ["1.8rem", { lineHeight: "100%" }],
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
          py: "0.8rem",
        },
        md: {
          px: "1.2rem",
          py: "1rem",
        },
        lg: {
          px: "1.4rem",
          py: "1.2rem",
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
    require("./src/Views/plugins/BoxShadowPlugin"),
    require("./src/Views/plugins/InputSizePlugin"),
  ],
};
