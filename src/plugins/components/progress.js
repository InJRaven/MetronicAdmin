import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".progress": {
      width: "100%",
      display: "flex",
      overflow: "hidden",
      height: "6px",
      backgroundColor: "var(--tw-gray-100)",
      borderRadius: theme("custom.components.common.borderRadius.progress"),
      "&.progress-sm": {
        height: "4px",
      },
      "&.progress-lg": {
        height: "8px",
      },
    },
    ".progress-bar": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      overflow: "hidden",
      textAlign: "center",
      whiteSpace: "nowrap",
      backgroundColor: "var(--tw-gray-300)",
      borderRadius: theme("custom.components.common.borderRadius.progress"),
    },
  });

  // Color options
  const colors = ["primary", "success", "danger", "warning", "info", "dark"];

  colors.forEach((color) => {
    addComponents({
      [`.progress-${color}`]: {
        backgroundColor: `var(--tw-${color}-light)`,
        ".progress-bar": {
          backgroundColor: `var(--tw-${color})`,
        },
      },
    });
  });
});
