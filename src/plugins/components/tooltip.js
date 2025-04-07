import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".tooltip": {
      display: "none",
      color: "white",
      zIndex: theme("custom.components.common.zIndex.tooltip"),
      boxShadow: "var(--tw-tooltip-box-shadow)",
      backgroundColor: "var(--tw-tooltip-background-color)",
      border: "var(--tw-tooltip-border)",
      borderRadius: theme("custom.components.common.borderRadius.tooltip"),
      padding: "0.6rem 0.8rem",
      fontSize: theme("fontSize.xs"),
      fontWeight: theme("fontWeight.normal"),
      lineHeight: theme("fontSize.xs.1.lineHeight"),
      "&.show": {
        display: "block",
      },
    },
  });
});
