import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".dialog-overlay": {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      backgroundColor: "rgb(0 0 0 / 0.5)",
    },
    ".dialog-content": {
      position: "fixed",
      zIndex: 50,
      backgroundColor: "hsl(var(--background))",
    },
    ".dialog-header": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    ".dialog-footer": {
      display: "flex",
      flexDirection: "column-reverse",
    },
    ".dialog-close": {
      position: "absolute",
      top: "1.6rem",
      right: "1.6rem",
      borderRadius: "0.3rem",
      opacity: "0.7",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        opacity: "1",
      },
      "&:disabled": {
        pointerEvents: "none",
      },
      "&[data-state=open]": {
        backgroundColor: "var(--tw-secondary)",
      },
    },
    ".dialog-title": {
      fontSize: theme("fontSize.lg"),
      lineHeight: theme("fontSize.lg.1.lineHeight"),
      color: "hsl(var(--foreground))",
      fontWeight: theme("fontWeight.semibold"),
    },
    ".dialog-description": {
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
      color: "hsl(var(--muted-foreground))",
    },
  });

  // Side
  addComponents({
    ".dialog-side-top": {
      top: 0,
      left: 0,
      right: 0,
      borderBottom: "1px solid var(--tw-gray-300)",
    },
    ".dialog-side-bottom": {
      bottom: 0,
      left: 0,
      right: 0,
      borderTop: "1px solid var(--tw-gray-300)",
    },
    ".dialog-side-left": {
      bottom: 0,
      left: 0,
      top: 0,
      width: "75%",
      height: "100%",
      borderRight: "1px solid var(--tw-gray-300)",
    },
    ".dialog-side-right": {
      bottom: 0,
      right: 0,
      top: 0,
      width: "75%",
      height: "100%",
      borderLeft: "1px solid var(--tw-gray-300)",
    },
  });
});
