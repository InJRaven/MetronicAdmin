import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".menu": {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      gap: "0.5rem",
    },
    ".menu-link": {
      cursor: "pointer",
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      flexGrow: 1,
      gap: "1rem",
      border: "1px solid transparent",
      paddingInlineStart: "1rem",
      paddingInlineEnd: "1rem",
      paddingTop: "0.6rem",
      paddingBottom: "0.6rem",
    },
    ".menu-heading": {
      "text-transform": "uppercase",
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
      fontWeight: theme("fontWeight.medium"),
      paddingInlineStart: "1rem",
      paddingInlineEnd: "1rem",
    },
    ".menu-title": {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
      fontWeight: theme("fontWeight.medium"),
    },
    ".menu-icon": {
      i: {
        fontSize: theme("fontSize.xl"),
        lineHeight: theme("fontSize.xl.1.lineHeight"),
      },
    },
    ".menu-arrow": {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      color: "var(--tw-gray-400)",
      i: {
        fontSize: theme("fontSize.2xs"),
        lineHeight: theme("fontSize.2xs.1.lineHeight"),
      },
    },
    ".menu-item": {
      display: "flex",
      flexDirection: "column",
    },
    ".menu-accordion": {
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      ".menu-item > .menu-link >.menu-title, .menu-item > .menu-label>.menu-title":
        {
          fontSize: theme("fontSize.2sm"),
          fontWeight: theme("fontSize.2sm.1.lineHeight"),
        },
    },
  });

  //Menu Color
  addComponents({
    ".menu": {
      ".menu-item": {
        ".menu-heading": {
          color: "var(--tw-gray-500)",
        },
        ".menu-title": {
          color: "var(--tw-gray-800)",
        },
        ".menu-icon i": {
          color: "var(--tw-gray-500)",
        },
        ".menu-link:hover, .menu-label:hover": {
          ".menu-title": {
            color: "var(--tw-gray-900)",
          },
          ".menu-icon i": {
            color: "var(--tw-primary)",
          },
        },

        "&.active, &.focus": {
          "> .menu-link, > .menu-label": {
            ".menu-title": {
              color: "var(--tw-gray-900)",
            },
            ".menu-icon i": {
              color: "var(--tw-primary)",
            },
          },
        },
      },
    },
  });
});
