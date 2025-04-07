import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".textarea": {
      display: "block",
      width: "100%",
      appearance: "none",
      boxShadow: "none",
      outline: "none",
      backgroundColor: "var(--tw-light-active)",
      padding: `${theme("custom.components.btn.DEFAULT.py")} ${theme(
        "custom.components.input.DEFAULT.px"
      )}`,
      borderRadius: theme("custom.components.common.borderRadius.btn"),
      fontWeight: theme("custom.components.btn.DEFAULT.fontWeight"),
      fontSize: theme("custom.components.btn.DEFAULT.fontSize"),
      border: "1px solid var(--tw-gray-300)",
      color: "var(--tw-gray-700)",
      "&::placeholder": {
        color: "var(--tw-gray-500)",
      },
      "&:hover": {
        borderColor: "var(--tw-gray-400)",
      },
      "&:focus": {
        borderColor: "var(--tw-primary)",
        boxShadow: "var(--tw-form-input-focus-box-shadow)",
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
      "&[disabled]": {
        backgroundColor: "var(--tw-gray-100)",
        color: "var(--tw-gray-400)",
        "&::placeholder": {
          color: "var(--tw-gray-300)",
        },
      },
      "&[readonly]": {
        backgroundColor: "var(--tw-gray-100)",
        color: "var(--tw-gray-400)",
        "&::placeholder": {
          color: "var(--tw-gray-300)",
        },
      },
    },
    ".textarea-sm": {
      "font-weight": theme("custom.components.btn.sm.fontWeight"),
      "font-size": theme("custom.components.btn.sm.fontSize"),
      padding: `${theme("custom.components.btn.sm.py")} ${theme(
        "custom.components.input.sm.px"
      )}`,
    },
    ".textarea-lg": {
      "font-weight": theme("custom.components.btn.lg.fontWeight"),
      "font-size": theme("custom.components.btn.lg.fontSize"),
      padding: `${theme("custom.components.btn.lg.py")} ${theme(
        "custom.components.input.lg.px"
      )}`,
    },
  });
});
