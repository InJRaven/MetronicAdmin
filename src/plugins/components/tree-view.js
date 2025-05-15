import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".tree": {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      gap: "0.5rem",
    },
    ".tree-node": {
      display: "flex",
      flexDirection: "column",
    },
    ".tree-leaf": {
      cursor: "pointer",
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      flexGrow: 1,
      border: "1px solid transparent",
      paddingInlineStart: "1rem",
      paddingInlineEnd: "1rem",
      paddingTop: "0.6rem",
      paddingBottom: "0.6rem",
    },
    ".tree-title": {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
      fontWeight: theme("fontWeight.medium"),
    },
    ".tree-icon": {
      i: {
        fontSize: theme("fontSize.xl"),
        lineHeight: theme("fontSize.xl.1.lineHeight"),
      },
    },
    ".tree-bullet": {
      display: "flex",
      flexShrink: 0,
      position: "relative",
      width: "6px",
      insetInlineStart: "-3px",
      zIndex: "20",
      "&::before": {
        content: "''",
        position: "absolute",
        width: "6px",
        height: "6px",
        top: 0,
        backgroundColor: "transparent",
      },
    },
    ".tree-child-accordion": {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      "&::before": {
        position: "absolute",
        insetInlineStart: "20px",
        top: 0,
        bottom: 0,
        borderInlineStartWidth: "1px",
        borderColor: "var(--tw-gray-300)",
        zIndex: 10,
      },

      ".tree-node > .tree-leaf": {
        paddingBottom: "0.8rem",
        paddingTop: "0.8rem",
        "& > .tree-title": {
          fontSize: theme("fontSize.2sm"),
          lineHeight: theme("fontSize.2sm.1.lineHeight"),
        },
      },
    },
  });
});
