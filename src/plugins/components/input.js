import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".input": {
      display: "block",
      width: "100%",
      appearance: "none",
      boxShadow: "none",
      border: "1px solid var(--tw-gray-300)",
      color: "var(--tw-gray-700)",
      backgroundColor: "var(--tw-light-active)",
      lineHeight: "1",
      outline: "none",
      fontWeight: theme("custom.components.btn.DEFAULT.fontWeight"),
      fontSize: theme("custom.components.btn.DEFAULT.fontSize"),
      borderRadius: theme("custom.components.common.borderRadius.btn"),
      height: theme("custom.components.btn.DEFAULT.height"),
      paddingInlineStart: theme("custom.components.input.DEFAULT.px"),
      paddingInlineEnd: theme("custom.components.input.DEFAULT.px"),

      "&::placeholder, input::placeholder": {
        color: "var(--tw-gray-500)",
      },
      "&:hover": {
        borderColor: "var(--tw-gray-400)",
      },
      "&:focus, &:has(input:focus)": {
        borderColor: "var(--tw-primary)",
        boxShadow: theme("custom.components.common.boxShadows.light.input"),
        color: "var(--tw-gray-700)",
        "&::placeholder, input::placeholder": {
          color: "var(--tw-gray-600)",
        },
      },

      "&:active, &:has(input:active)": {
        color: "var(--tw-gray-700)",
        "&::placeholder, input::placeholder": {
          color: "var(--tw-gray-600)",
        },
        boxShadow: "none",
      },
      "&:disabled, &:has(input:disabled)": {
        userSelect: "none",
        backgroundColor: "var(--tw-gray-100)",
        color: "var(--tw-gray-400)",
        opacity: "0.5",
        "&::placeholder, input::placeholder": {
          color: "var(--tw-gray-300)",
        },
        "&:hover": {
          borderColor: "var(--tw-gray-300)",
        },
      },
    },
    ".input-sm": {
      fontWeight: theme("custom.components.btn.sm.fontWeight"),
      fontSize: theme("custom.components.btn.sm.fontSize"),
      height: theme("custom.components.btn.sm.height"),
      paddingInlineStart: theme("custom.components.input.sm.px"),
      paddingInlineEnd: theme("custom.components.input.sm.px"),
    },
    ".input-lg": {
      fontWeight: theme("custom.components.btn.lg.fontWeight"),
      fontSize: theme("custom.components.btn.lg.fontSize"),
      height: theme("custom.components.btn.lg.height"),
      paddingInlineStart: theme("custom.components.input.lg.px"),
      paddingInlineEnd: theme("custom.components.input.lg.px"),
    },
  });

  // Form input with icons

  addComponents({
    ".input:not(input)": {
      display: "flex",
      gap: "0.6rem",
      alignItems: "center",
      appearance: "none",
      boxShadow: "none",
      outline: "none",
      color: "var(--tw-gray-600)",
      input: {
        flexGrow: "1",
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "inherit",
        outline: "none",
        fontSize: "inherit",
        fontWeight: "inherit",
      },
      i: {
        "font-size": theme("custom.components.btn.DEFAULT.iconFontSize"),
      },
      ".btn-icon": {
        border: "0",
        height: "auto",
        width: "auto",
        "&:hover, &:focus, &:active, &.active": {
          i: {
            color: "var(--tw-gray-800)",
          },
        },
      },
    },
    ".input:not(input).input-xs": {
      i: {
        "font-size": theme("custom.components.btn.xs.iconFontSize"),
      },
    },
    ".input:not(input).input-sm": {
      i: {
        "font-size": theme("custom.components.btn.sm.iconFontSize"),
      },
    },
    ".input:not(input).input-lg": {
      i: {
        "font-size": theme("custom.components.btn.lg.iconFontSize"),
      },
    },
  });
});
