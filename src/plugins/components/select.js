import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".select": {
      display: "block",
      width: "100%",
      appearance: "none",
      boxShadow: "none",
      outline: "none",
      "background-repeat": "no-repeat",
      "background-position": `right 1.08rem center`, // Logical property for RTL/LTR
      "background-size": "1.4rem 1.1rem",
      "background-image": `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="${theme(
          "base.colors.gray.light.600"
        )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 5 6 6 6-6"/></svg>`
      )}")`,
      ".dark &": {
        "background-image": `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="${theme(
            "base.colors.gray.dark.600"
          )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 5 6 6 6-6"/></svg>`
        )}")`,
      },
      '&[multiple], &[size]:not([size="1"])': {
        "padding-inline-end": `${theme("custom.components.btn.DEFAULT.px")}`, // Logical property for RTL/LTR
        "background-image": "none",
      },
      "&:-moz-focusring": {
        color: "transparent",
        "text-shadow": "none",
      },
      "font-weight": theme("custom.components.btn.DEFAULT.fontWeight"),
      "font-size": theme("custom.components.btn.DEFAULT.fontSize"),
      "line-height": "1",
      "background-color": "var(--tw-light-active)",
      "border-radius": theme("custom.components.common.borderRadius.btn"),
      height: theme("custom.components.btn.DEFAULT.height"),
      "padding-inline-start": theme("custom.components.input.DEFAULT.px"), // Logical property for RTL/LTR
      "padding-inline-end": theme("custom.components.input.DEFAULT.px"), // Logical property for RTL/LTR
      border: "1px solid var(--tw-gray-300)",
      color: "var(--tw-gray-700)",
      "&:hover": {
        "border-color": "var(--tw-gray-400)",
      },
      "&:focus": {
        "border-color": "var(--tw-primary)",
        "box-shadow": "var(--tw-input-focus-box-shadow)",
        color: "var(--tw-gray-700)",
        "&::placeholder": {
          color: "var(--tw-gray-600)",
        },
      },
      "&:active": {
        color: "var(--tw-gray-700)",
        "&::placeholder": {
          color: "var(--tw-gray-600)",
        },
        "box-shadow": "none",
      },
      "&:disabled": {
        "background-color": "var(--tw-gray-100)",
        color: "var(--tw-gray-400)",
        "&::placeholder": {
          color: "var(--tw-gray-300)",
        },
      },

      "&.select-sm": {
        "background-position": `inset-inline-end 0.88rem center`, // Logical property for RTL/LTR
      },
      "&.select-lg": {
        "background-position": `inset-inline-end 1.2rem center`, // Logical property for RTL/LTR
      },
    },

    ".radix-select": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "4rem",
      width: "100%",
      padding: "0.8rem 1.2rem",
      cursor: "pointer",
      "border-width": "1px",
      "background-color": "var(--tw-light-light)",
      "border-radius": "0.6rem",
      "font-size": theme("fontSize.sm"),
      lineHeight: 'theme("fontSize.sm.1.lineHeight")',
      "font-weight": theme("fontWeight.medium"),
      outline: "none",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionDuration: "150ms",
      "&:hover": {
        borderColor: "var(--tw-gray-400)",
      },
      "&:focus": {
        color: "var(--tw-gray-900)",
        borderColor: "var(--tw-primary)",
      },
      '&[data-state="open"]': {
        color: "var(--tw-gray-900)",
        borderColor: "var(--tw-primary)",
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      "& > span": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "1",
        "-webkit-box-orient": "vertical",
      },
    },
    ".radix-select-content": {
      position: "relative",
      zIndex: "50",
      overflow: "hidden",
      borderRadius: "0.6rem",
      borderWidth: "1px",
      backgroundColor: "hsl(var(--popover))",
      color: "hsl(var(--popover-foreground))",
      width: "var(--radix-select-trigger-width)",
      maxHeight: "var(--radix-select-content-available-height)",
    },
    ".radix-select-item": {
      position: "relative",
      display: "flex",
      width: "100%",
      cursor: "pointer",
      alignItems: "center",
      fontSize: theme("fontSize.2sm"),
      cursor: "pointer",
      userSelect: "none",
      outline: "none",
      color: "var(--tw-gray-700)",
      padding: "0.6rem 0.8rem 0.6rem 3.2rem",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionDuration: "150ms",
      "&:focus": {
        backgroundColor: "hsl(var(--accent))",
        color: "hsl(var(--accent-foreground))",
      },
      "&[data-highlighted]": {
        color: "var(--tw-gray-900)",
      },
      "&[data-disabled]": {
        pointerEvents: "none",
        opacity: "0.5",
      },
      '&[data-state="checked"]': {
        fontWeight: theme("fontWeight.bold"),
      },

      "&:first-child": {
        borderTopLeftRadius: theme("borderRadius.md"),
        borderTopRightRadius: theme("borderRadius.md"),
      },

      "&:last-child": {
        borderBottomLeftRadius: theme("borderRadius.md"),
        borderBottomRightRadius: theme("borderRadius.md"),
      },
    },
    ".radix-select-scroll-button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.8rem 0",
      cursor: "default",
    },
    ".radix-check": {
      position: "absolute",
      display: "flex",
      left: "0.8rem",
      height: "1.4rem",
      width: "1.4rem",
      alignItems: "center",
      justifyContent: "center",
    },
    ".radix-select-separator": {
      height: "1px",
      margin: "0.4rem -0.4rem",
      backgroundColor: "hsl(var(--muted))",
    },

    ".select-sm": {
      "font-weight": theme("custom.components.btn.sm.fontWeight"),
      "font-size": theme("custom.components.btn.sm.fontSize"),
      height: theme("custom.components.btn.sm.height"),
      "padding-inline-start": theme("custom.components.input.sm.px"), // Logical property for RTL/LTR
      "padding-inline-end": theme("custom.components.input.sm.px"), // Logical property for RTL/LTR
      "background-size": "1.4rem 1rem",
    },
    ".select-lg": {
      "font-weight": theme("custom.components.btn.lg.fontWeight"),
      "font-size": theme("custom.components.btn.lg.fontSize"),
      height: theme("custom.components.btn.lg.height"),
      "padding-inline-start": theme("custom.components.input.lg.px"), // Logical property for RTL/LTR
      "padding-inline-end": theme("custom.components.input.lg.px"), // Logical property for RTL/LTR
      "background-size": "1.4rem 1.2rem",
    },
    "[dir=rtl]": {
      ".select": {
        "background-position": `left 0.675rem center`, // Logical property for RTL/LTR
      },
    },

    //Radix Ui
  });
});
