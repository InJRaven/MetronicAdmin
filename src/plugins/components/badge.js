import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".badge": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid transparent",
      fontWeight: theme("fontWeight.medium"),

      "&:focus": {
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        outline: "none",
      },

      svg: {
        marginInlineStart: "-1px",
        flexShrink: 0,
      },
    },
  });

  //Badge Variants
  addComponents({
    ".badge-primary": {
      backgroundColor: theme("colors.primary.DEFAULT"),
      color: theme("colors.primary.foreground"),
    },
    ".badge-secondary": {
      backgroundColor: theme("colors.secondary.DEFAULT"),
      color: theme("colors.secondary.foreground"),
    },
    ".badge-success": {
      backgroundColor: "var(--tw-success)",
      color: "white",
    },
    ".badge-warning": {
      backgroundColor: "var(--tw-warning)",
      color: "white",
    },
    ".badge-info": {
      backgroundColor: "var(--tw-info)",
      color: "white",
    },
    ".badge-mono": {
      backgroundColor: theme("colors.mono.DEFAULT"),
      color: theme("colors.mono.foreground"),
    },
    ".badge-destructive": {
      backgroundColor: theme("colors.destructive.DEFAULT"),
      color: theme("colors.destructive.foreground"),
    },
  });

  //Badge Size
  addComponents({
    ".badge-xs": {
      borderRadius: theme("borderRadius.sm"),
      padding: "0 0.4rem",
      height: "1.6rem",
      minWidth: "1.6rem",
      gap: "0.4rem",
      fontSize: theme("fontSize.3xs"),
      lineHeight: theme("fontSize.3xs.lineHeight.1"),
      svg: {
        height: "1.2rem",
        width: "1.2rem",
      },

      i: {
        fontSize: theme("fontSize.xs"),
      },
    },
    ".badge-sm": {
      borderRadius: theme("borderRadius.sm"),
      padding: "0 0.5rem",
      height: "2rem",
      minWidth: "2rem",
      gap: "0.4rem",
      fontSize: theme("fontSize.3xs"),
      lineHeight: theme("fontSize.3xs.lineHeight.1"),
      svg: {
        height: "1.2rem",
        width: "1.2rem",
      },
      i: {
        fontSize: theme("fontSize.xs"),
      },
    },
    ".badge-md": {
      borderRadius: theme("borderRadius.md"),
      padding: "0 0.72rem",
      height: "2.4rem",
      minWidth: "2.4rem",
      gap: "0.6rem",
      fontSize: theme("fontSize.2sm"),
      lineHeight: theme("fontSize.2sm.lineHeight.1"),
      svg: {
        height: "1.4rem",
        width: "1.4rem",
      },
      i: {
        fontSize: theme("fontSize.sm"),
      },
    },
    ".badge-lg": {
      borderRadius: theme("borderRadius.md"),
      padding: "0 0.8rem",
      height: "2.8rem",
      minWidth: "2.8rem",
      gap: "0.6rem",
      fontSize: theme("fontSize.2sm"),
      lineHeight: theme("fontSize.2sm.lineHeight.1"),

      svg: {
        height: "1.4rem",
        width: "1.4rem",
      },

      i: {
        fontSize: theme("fontSize.sm"),
      },
    },
  });

  // Appearance Badge
  addComponents({
    ".appearance-solid": {
      borderColor: "transparent",
    },
    ".appearance-stroke": {
      border: "1px solid var(--border)",
      color: theme("colors.secondary.foreground"),
      backgroundColor: "transparent",
    },
    ".appearance-ghost": {
      borderColor: "transparent",
      backgroundColor: "transparent",
      "&.badge-xs": { padding: 0 },
      "&.badge-sm": { padding: 0 },
      "&.badge-md": { padding: 0 },
      "&.badge-lg": { padding: 0 },
    },
  });

  // Compound Variants
  const colors = [
    "primary",
    "secondary",
    "success",
    "warning",
    "info",
    "mono",
    "destructive",
  ];

  colors.forEach((c) => {
    if (c === "primary") {
      addComponents({
        [`.badge-${c}.appearance-outline`]: {
          backgroundColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          borderColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
        },
        [`.badge-${c}.appearance-light`]: {
          backgroundColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          color: theme("colors.primary.DEFAULT"),
        },
        [`.badge-${c}.appearance-ghost`]: {
          color: theme("colors.primary.DEFAULT"),
        },
      });
    } else if (c === "secondary") {
      addComponents({
        [`.badge-${c}.appearance-outline`]: {
          backgroundColor: theme("fontSize.secondary.DEFAULT"),
          border: `1px solid var(--border)`,
          color: theme("fontSize.secondary.foreground"),
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: `color-mix(in oklab,var(--${c}) 50%,transparent)`,
          },
        },
        [`.badge-${c}.appearance-light`]: {
          backgroundColor: theme("fontSize.secondary.DEFAULT"),
          color: theme("fontSize.secondary.foreground"),
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: `color-mix(in oklab,var(--${c}) 50%,transparent)`,
          },
        },
        [`.badge-${c}.appearance-ghost`]: {
          color: theme("colors.secondary.foreground"),
        },
      });
    } else if (c === "mono") {
      addComponents({
        [`.badge-${c}.appearance-outline`]: {
          backgroundColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          borderColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          color: theme("colors.mono.DEFAULT"),
        },
        [`.badge-${c}.appearance-light`]: {
          backgroundColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          color: theme("colors.mono.DEFAULT"),
        },
        [`.badge-${c}.appearance-ghost`]: {
          color: theme("colors.mono.DEFAULT"),
        },
      });
    } else if (c === "destructive") {
      addComponents({
        [`.badge-${c}.appearance-outline`]: {
          backgroundColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          borderColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          color: theme("colors.destructive.DEFAULT"),
        },
        [`.badge-${c}.appearance-light`]: {
          backgroundColor: `color-mix(in oklab,var(--${c}) 10%,transparent)`,
          color: theme("colors.destructive.DEFAULT"),
        },
        [`.badge-${c}.appearance-ghost`]: {
          color: theme("colors.destructive.DEFAULT"),
        },
      });
    } else {
      addComponents({
        [`.badge-${c}.appearance-outline`]: {
          backgroundColor: `var(--tw-${c}-clarity)`,
          border: `1px solid var(--tw-${c}-surface)`,
          color: theme("fontSize.secondary.foreground"),
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: `color-mix(in oklab,var(--tw-${c}-clarity) 50%,transparent)`,
            borderColor: `var(--tw-${c}-surface)`,
          },
        },
        [`.badge-${c}.appearance-light`]: {
          backgroundColor: `var(--tw-${c}-light)`,
          border: `1px solid var(--tw-${c}-surface)`,
          color: `var(--tw-${c})`,
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: `color-mix(in oklab,var(--tw-${c}-surface) 50%,transparent)`,
          },
        },
        [`.badge-${c}.appearance-ghost`]: {
          color: `var(--tw-${c})`,
        },
      });
    }
  });

  //Badge Button
  addComponents({
    ".badge-button": {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      height: "1.4rem",
      minWidth: "1.4rem",
      padding: 0,
      borderRadius: theme("borderRadius.md"),
      marginInlineEnd: "-2px",
      opacity: "0.6",
      "&>svg": {
        height: "1.4rem",
        width: "1.4rem",
        opacity: "1 !important",
      },

      "&:hover": { opacity: 1 },
    },
  });
});
