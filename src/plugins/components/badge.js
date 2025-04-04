import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".badge": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "1",
      borderRadius: theme("custom.components.common.borderRadius.badge"),
      padding: "0.8rem",
      color: "var(--tw-gray-700)",
      backgroundColor: "var(--tw-gray-200)",
      border: "1px solid transparent",
      fontWeight: theme("fontWeight.medium"),
      fontSize: theme("fontSize.2xs"),
      gap: "0.6rem",

      "&.badge-pill": {
        borderRadius: "3rem",
        paddingInlineStart: "1rem",
        paddingInlineEnd: "1rem",
      },
    },
    ".badge-circle,.badge-dot": {
      width: "0.6rem",
      height: "0.6rem",
      padding: 0,
      borderRadius: "50%",
      backgroundColor: "var(--tw-gray-700)",
      flexShrink: 0,
      lineHeight: 0,
    },
    ".badge-xs": {
      fontSize: theme("fontSize.3xs"),
      padding: "0.3rem 0.4rem",
      gap: "0.4rem",
      "&.badge-pill": {
        paddingInlineStart: "0.4rem",
        paddingInlineEnd: "0.4rem",
      },

      ".badge-circle,.badge-dot": {
        width: "0.4rem",
        height: "0.4rem",
      },
    },
    ".badge-sm": {
      padding: "0.5rem 0.6rem",
      gap: "0.5rem",
      "&.badge-pill": {
        paddingInlineStart: "0.6rem",
        paddingInlineEnd: "0.6rem",
      },

      ".badge-circle,.badge-dot": {
        width: "0.5rem",
        height: "0.5rem",
      },
    },
    ".badge-lg": {
      fontSize: theme("fontSize.2sm"),
      padding: "0.9rem 1.1rem",
      gap: "0.7rem",
      "&.badge-pill": {
        paddingInlineStart: "1.1rem",
        paddingInlineEnd: "1.1rem",
      },

      ".badge-circle,.badge-dot": {
        width: "0.7rem",
        height: "0.7rem",
      },
    },
  });

  //Defualt Option
  addComponents({
    ".badge-outline": {
      color: "var(--tw-gray-600)",
      borderColor: "var(--tw-gray-300)",
      backgroundColor: "var(--tw-gray-100)",
    },
  });

  const colors = ["primary", "success", "danger", "warning", "info", "dark"];

  colors.forEach((color) => {
    addComponents({
      [`.badge-${color}`]: {
        color: theme("colors.white"),
        "background-color": `var(--tw-${color})`,
        ".badge-circle,.badge-dot": {
          backgroundColor: theme("colors.white"),
        },
      },
      [`.badge-outline.badge-${color}`]: {
        color: `var(--tw-${color})`,
        backgroundColor: `var(--tw-${color}-light)`,
        borderColor: `var(--tw-${color}-clarity)`,

        ".badge-circle,.badge-dot": {
          backgroundColor: `var(--tw-${color})`,
        },
      },
    });
  });
});
