import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".file-input": {
      display: "block",
      width: "100%",
      appearance: "none",
      boxShadow: "none",
      outline: "none",
      lineHeight: "1",
      fontWeight: theme("custom.components.btn.DEFAULT.fontWeight"),
      fontSize: theme("custom.components.btn.DEFAULT.fontSize"),
      backgroundColor: "var(--tw-light-active)",
      borderRadius: theme("custom.components.common.borderRadius.btn"),
      height: theme("custom.components.btn.DEFAULT.height"),
      padding: "0",
      paddingInlineEnd: theme("custom.components.btn.DEFAULT.px"),
      border: "1px solid var(--tw-gray-300)",
      color: "var(--tw-gray-700)",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
      transitionDuration: "200ms",
      "&::placeholder": {
        color: "var(--tw-gray-500)",
      },

      "&::file-selector-button": {
        color: "var(--tw-gray-600)",
        height: "100%",
        appearance: "none",
        paddingInlineStart: theme("custom.components.btn.DEFAULT.px"),
        paddingInlineEnd: theme("custom.components.btn.DEFAULT.px"),
        marginInlineEnd: theme("custom.components.btn.DEFAULT.px"),
        outline: "none",
        backgroundColor: "transparent",
        borderStartStartRadius: theme(
          "custom.components.common.borderRadius.btn"
        ),
        borderEndStartRadius: theme(
          "custom.components.common.borderRadius.btn"
        ),
        border: "0",
        borderInlineEnd: "1px solid var(--tw-gray-300)",
        boxShadow: "none",
      },
      "&:hover": {
        borderColor: "var(--tw-gray-400)",
      },
      "&:focus": {
        borderColor: "var(--tw-primary)",
        boxShadow: "var(--tw-input-focus-box-shadow)",
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
        boxShadow: "none",
      },
      "&:disabled": {
        backgroundColor: "var(--tw-gray-100)",
        color: "var(--tw-gray-400)",
        "&::placeholder": {
          color: "var(--tw-gray-300)",
        },
      },
    },

    ".file-input-sm": {
      fontWeight: theme("custom.components.btn.sm.fontWeight"),
      fontSize: theme("custom.components.btn.sm.fontSize"),
      height: theme("custom.components.btn.sm.height"),
      paddingInlineEnd: theme("custom.components.btn.sm.px"),
      "&::file-selector-button": {
        paddingInlineStart: theme("custom.components.btn.sm.px"),
        paddingInlineEnd: theme("custom.components.btn.sm.px"),
      },
    },
    ".file-input-lg": {
      fontWeight: theme("custom.components.btn.lg.fontWeight"),
      fontSize: theme("custom.components.btn.lg.fontSize"),
      height: theme("custom.components.btn.lg.height"),
      paddingInlineEnd: theme("custom.components.btn.lg.px"),
      "&::file-selector-button": {
        paddingInlineStart: theme("custom.components.btn.lg.px"),
        paddingInlineEnd: theme("custom.components.btn.lg.px"),
      },
    },
  });
});
