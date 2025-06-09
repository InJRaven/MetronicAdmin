import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".months": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "1.6rem",
      [`@media (min-width: ${theme("screens.sm")})`]: {
        flexDirection: "row",
      },
    },
    ".calendar-navigation": {
      position: "absolute",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      zIndex: 10,
    },

    ".calendar-header": {
      position: "relative",
      display: "flex",
      margin: "0 4rem 0.4rem 4rem",
      height: "3.2rem",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 20,
      ".caption": {
        fontSize: theme("fontSize.sm"),
        fontWeight: theme("fontWeight.medium"),
      },
    },

    ".calendar-button": {
      height: "3.2rem",
      width: "3.2rem",
      justifyContent: "center",
      padding: 0,
      color: "color-mix(in oklab,var(--muted-foreground) 80%,transparent)",
      "&:hover": {
        color: theme("colors.foreground"),
      },
    },

    ".weekday": {
      height: "3.2rem",
      width: "3.2rem",
      fontSize: theme("fontSize.xs"),
      color: "color-mix(in oklab,var(--muted-foreground) 80%,transparent)",
    },

    ".day": {
      position: "relative",
      height: "3.2rem",
      width: "3.2rem",
      padding: "1px 0",
      fontSize: theme("fontSize.sm"),
      textAlign: "center",
    },
  });

  //Day Button
  addComponents({
    ".day-button": {
      cursor: "pointer",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "3.2rem",
      width: "3.2rem",
      whiteSpace: "nowrap",
      borderRadius: theme("borderRadius.md"),
      padding: 0,
      color: theme("colors.foreground"),
      transitionDuration: "200ms",

      "&:focus-visible": {
        zIndex: 10,
      },
      "&:hover:not([data-selected])": {
        backgroundColor: theme("colors.accent.DEFAULT"),
        color: theme("colors.foreground"),
      },

      ".group[data-selected]:not(.range-middle) &": {
        transitionProperty:
          "color, background-color, border-radius, box-shadow",
        transitionDuration: "150ms",
      },
      ".group[data-selected] &": {
        backgroundColor: theme("colors.primary.DEFAULT"),
        color: theme("colors.primary.foreground"),
      },
      ".group[data-disabled] &": {
        color: "color-mix(in oklab,var(--foreground) 30%,transparent)",
        textDecoration: "line-through",
      },

      ".group[data-outside] &": {
        color: "color-mix(in oklab,var(--foreground) 30%,transparent)",
      },
      ".group[data-selected][data-outside] &": {
        color: theme("colors.primary.foreground"),
      },

      ".group.range-start:not(.range-end) &": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
      ".group.range-end:not(.range-start) &": {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      ".group.range-middle &": {
        borderRadius: "0",
      },
      ".group.range-middle[data-selected] &": {
        backgroundColor: theme("colors.accent.DEFAULT"),
        color: theme("colors.foreground"),
      },
    },
  });

  // Today
  addComponents({
    ".today::after": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      bottom: "0.4rem",
      left: "50%",
      width: "3px",
      height: "3px",
      zIndex: "10",
      borderRadius: "9999px",
      backgroundColor: theme("colors.primary.DEFAULT"),
      transform: "translateX(-50%)",
      transitionProperty: theme("transitionProperty.colors"),
    },

    // RTL support
    '[dir="rtl"] .today::after': {
      transform: "translateX(50%)",
    },

    // Selected but not range-middle
    ".today[data-selected]:not(.range-middle)::after": {
      backgroundColor: theme("colors.background.DEFAULT"),
    },

    // Disabled state
    ".today[data-disabled]::after": {
      backgroundColor:
        "color-mix(in oklab, var(--foreground) 30%, transparent)",
    },
  });

  //Out Side
  addComponents({
    ".outside": {
      color: theme("colors.muted.foreground"),
      "&[data-selected]": {
        backgroundColor: "color-mix(in oklch, var(--accent) 50%, transparent)",
        color: theme("colors.muted.foreground"),
      },
    },
  });

  //Week Number
  addComponents({
    ".week-number": {
      height: "3.2rem",
      width: "3.2rem",
      fontSize: theme("fontSize.xs"),
      fontWeight: theme("fontWeight.medium"),
      color: "color-mix(in oklch, var(--muted-foreground) 80%, transparent)",
    },
  });
});
