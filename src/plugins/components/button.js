import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".btn": {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      lineHeight: 1,
      gap: theme("custom.components.btn.DEFAULT.gap"),
      whiteSpace: "nowrap",
      fontWeight: theme("custom.components.btn.DEFAULT.fontWeight"),
      fontSize: theme("custom.components.btn.DEFAULT.fontSize"),
      height: theme("custom.components.btn.DEFAULT.height"),
      borderRadius: theme("custom.components.common.borderRadius.btn"),
      paddingInlineStart: theme("custom.components.btn.DEFAULT.px"),
      paddingInlineEnd: theme("custom.components.btn.DEFAULT.px"),
      transitionProperty: "background-color, border-color, color,box-shadow",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",

      "&[disabled], &.disabled": {
        opacity: "0.5",
        "pointer-events": "none",
      },

      '&:has([data-arrow="true"])': {
        justifyContent: "space-between",
      },

      "& svg": {
        flexShrink: "0",
      },
    },

    ".btn-underline-dashed": {
      textDecorationThickness: "1px",
    },
  });

  //Default
  addComponents({
    ".btn-default": {
      "&:focus-visible": {
        "--tw-ring-offset-width": "2px",
        outline: "none",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },
    },
  });

  //Button Variants
  const variants = [
    "primary",
    "mono",
    "destructive",
    "secondary",
    "outline",
    "dashed",
    "ghost",
    "dim",
  ];
  variants.forEach((v) => {
    if (v === "dim") {
      addComponents({
        ".btn-dim": {
          color: theme("colors.muted.foreground"),
          "&:hover": {
            color: theme("colors.foreground"),
          },
          '&[data-state="open"]': {
            color: theme("colors.foreground"),
          },
        },
      });
    } else if (v === "ghost") {
      addComponents({
        ".btn-ghost": {
          color: theme("colors.accent.foreground"),
          "&:hover": {
            backgroundColor: theme("colors.accent.DEFAULT"),
            color: theme("colors.accent.foreground"),
          },
          '&[data-state="open"]': {
            backgroundColor: theme("colors.accent.DEFAULT"),
            color: theme("colors.accent.foreground"),
          },
        },
      });
    } else if (v === "dashed") {
      addComponents({
        ".btn-dashed": {
          border: "1px dash var(--input)",
          color: theme("colors.accent.foreground"),
          backgroundColor: theme("colors.background"),
          "&:hover": {
            backgroundColor: theme("colors.accent.DEFAULT"),
            color: theme("colors.accent.foreground"),
          },
          '&[data-state="open"]': {
            color: theme("colors.accent.foreground"),
          },
        },
      });
    } else if (v === "outline") {
      addComponents({
        ".btn-outline": {
          border: "1px solid var(--input)",
          color: theme("colors.accent.foreground"),
          backgroundColor: theme("colors.background"),
          "&:hover": {
            backgroundColor: theme("colors.accent.DEFAULT"),
          },
          '&[data-state="open"]': {
            color: theme("colors.accent.foreground"),
          },
        },
      });
    } else {
      addComponents({
        [`.btn-${v}`]: {
          backgroundColor: `var(--${v})`,
          color: `var(--${v}-foreground)`,
          "&:hover": {
            backgroundColor: `color-mix(in oklab,var(--${v}) 90%,transparent)`,
          },
          '&[data-state="open"]': {
            color: theme("colors.accent.foreground"),
          },
        },
      });
    }
  });

  //Button Size
  addComponents({
    ".btn-lg": {
      height: "4rem",
      borderRadius: theme("borderRadius.md"),
      fontSize: theme("fontSize.sm"),
      gap: "0.6rem",
      paddingInlineStart: "1.6rem",
      paddingInlineEnd: "1.6rem",

      'svg:not([class*="size-"])': {
        height: "1.6rem",
        width: "1.6rem",
      },
    },
    ".btn-md": {
      height: "3.4rem",
      borderRadius: theme("borderRadius.md"),
      fontSize: theme("fontSize.2sm"),
      gap: "0.6rem",
      paddingInlineStart: "1.2rem",
      paddingInlineEnd: "1.2rem",

      'svg:not([class*="size-"])': {
        height: "1.6rem",
        width: "1.6rem",
      },
    },
    ".btn-sm": {
      height: "2.8rem",
      borderRadius: theme("borderRadius.md"),
      fontSize: theme("fontSize.xs"),
      gap: "0.8rem",
      paddingInlineStart: "1rem",
      paddingInlineEnd: "1rem",

      'svg:not([class*="size-"])': {
        height: "1.4rem",
        width: "1.4rem",
      },
    },
  });

  //Button Mode
  addComponents({
    ".btn-icon": {
      alignItems: "center",
      justifyItems: "center",
      width: theme("custom.components.btn.DEFAULT.height"),
      flexShrink: 0,
      padding: 0,
      gap: 0,
      i: {
        lineHeight: "0 !important",
      },
      "&:focus-visible": {
        outline: "none",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },
    },

    ".btn-link": {
      color: theme("colors.primary"),
      height: "auto",
      padding: 0,
      backgroundColor: "transparent",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
      '&[data-state="open"]': {
        backgroundColor: "transparent",
      },
    },

    ".btn-input": {
      justifyContent: "flex-start",
      border: "1px solid transparent",
      fontWeight: theme("fontWeight.normal"),

      svg: {
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: " cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "150ms",
        "&:hover": {
          color: theme("colors.foreground"),
        },
      },
      "&:hover": {
        backgroundColor: theme("colors.background"),
      },
      "&:placeholder": {
        color: theme("colors.muted.foreground"),
      },
      '&[data-state="open"]': {
        backgroundColor: theme("colors.background"),
        outline: "none",
        borderColor: theme("colors.ring"),
        "--tw-ring-color": "color-mix(in oklab, var(--ring) 50%, transparent)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },

      '&[aria-invalid="true"]': {
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
      },

      '&[data-invalid="true"]': {
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
      },
      "&:focus-visible": {
        outline: "none",
        borderColor: theme("colors.ring"),
        "--tw-ring-color": "color-mix(in oklab, var(--ring) 50%, transparent)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },

      "@media (prefers-color-scheme: dark)": {
        '&[aria-invalid="true"]': {
          borderColor: theme("colors.destructive.DEFAULT"),
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
        },
        '&[data-invalid="true"]': {
          borderColor: theme("colors.destructive.DEFAULT"),
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
        },
      },
    },
  });

  // Compound Variants

  const compoundVariants = ["default", "icon", "link", "input"];

  compoundVariants.forEach((c) => {
    if (c === "default") {
      addComponents({
        ".btn-default": {
          "&.btn-ghost,&.btn-outline,&.btn-dashed,&.btn-secondary": {
            '& svg:not([role="img"]):not([class*="text-"])': {
              opacity: "0.6",
            },
          },
        },
      });
    }

    if (c === "icon") {
      addComponents({
        ".btn-outline.btn-icon": {
          '& svg:not([role="img"]):not([class*="text-"])': {
            opacity: "0.6",
          },
        },
      });
    }
    if (c === "link") {
    }
    if (c === "input") {
    }
  });

  // Auto Height
  addComponents({
    ".btn-auto-height": {
      "&.btn-md": {
        height: "auto",
        minHeight: "3.4rem",
      },
      "&.btn-sm": {
        height: "auto",
        minHeight: "2.8rem",
      },
      "&.btn-lg": {
        height: "auto",
        minHeight: "4rem",
      },
    },
  });

  // Shadow
  variants.forEach((v) => {
    if (v !== "dim" || v !== "ghost") {
      compoundVariants.forEach((c) => {
        if (c === "default" || c === "icon") {
          addComponents({
            [`.btn-${c}.btn-${v}`]: {
              "--tw-shadow-color":
                "color-mix(in oklab, oklch(0 0 0) 5%, transparent)",
              "--tw-shadow":
                "0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05))",
              boxShadow:
                "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            },
          });
        }
      });
    }
  });

  // Link Underline
  const underLine = ["solid", "dashed"];
  underLine.forEach((u) => {
    addComponents({
      [`.btn-primary.btn-link.btn-underline-${u}`]: {
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.primary"),

        'svg:not([role="img"]):not([class*="text-"])': {
          opacity: "0.6",
        },

        "&:hover": {
          color: "color-mix(in oklab,var(--primary) 90%,transparent)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
          textDecorationStyle: `${u}`,
        },
      },
      [`.btn-inverse.btn-link.btn-underline-${u}`]: {
        fontWeight: theme("fontWeight.medium"),
        color: "inherit",
        'svg:not([role="img"]):not([class*="text-"])': {
          opacity: "0.6",
        },
        "&:hover": {
          color: "color-mix(in oklab,var(--primary) 90%,transparent)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
          textDecorationStyle: `${u}`,
        },
      },
      [`.btn-foreground.btn-link.btn-underline-${u}`]: {
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.foreground"),
        'svg:not([role="img"]):not([class*="text-"])': {
          opacity: "0.6",
        },
        "&:hover": {
          color: "color-mix(in oklab,var(--primary) 90%,transparent)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
          textDecorationStyle: `${u}`,
        },
      },
    });
  });

  // Link Underlined
  const underLined = ["solid", "dashed"];
  underLined.forEach((u) => {
    addComponents({
      [`.btn-primary.btn-link.btn-underlined-${u}`]: {
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.primary"),

        'svg:not([role="img"]):not([class*="text-"])': {
          opacity: "0.6",
        },

        "&:hover": {
          color: "color-mix(in oklab,var(--primary) 90%,transparent)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
          textDecorationStyle: `${u}`,
        },
      },
      [`.btn-inverse.btn-link.btn-underlined-${u}`]: {
        fontWeight: theme("fontWeight.medium"),
        color: "inherit",
        'svg:not([role="img"]):not([class*="text-"])': {
          opacity: "0.6",
        },
        "&:hover": {
          color: "color-mix(in oklab,var(--primary) 90%,transparent)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
          textDecorationStyle: `${u}`,
        },
      },
      [`.btn-foreground.btn-link.btn-underlined-${u}`]: {
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.foreground"),
        'svg:not([role="img"]):not([class*="text-"])': {
          opacity: "0.6",
        },
        "&:hover": {
          color: "color-mix(in oklab,var(--primary) 90%,transparent)",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
          textDecorationStyle: `${u}`,
        },
      },
    });
  });

  //Appearance Ghost
  addComponents({
    ".btn-primary.appearance-ghost": {
      backgroundColor: "transparent",
      color: `color-mix(in oklab,var(--primary) 90%,transparent)`,
      "&:hover": {
        backgroundColor: "color-mix(in oklab,var(--primary) 5%,transparent)",
      },

      '&[data-state="open"]': {
        backgroundColor: "color-mix(in oklab,var(--primary) 5%,transparent)",
      },
    },
    ".btn-destructive.appearance-ghost": {
      backgroundColor: "transparent",
      color: `color-mix(in oklab,var(--destructive) 90%,transparent)`,
      "&:hover": {
        backgroundColor:
          "color-mix(in oklab,var(--destructive) 5%,transparent)",
      },
      '&[data-state="open"]': {
        backgroundColor:
          "color-mix(in oklab,var(--destructive) 5%,transparent)",
      },
    },
    ".btn-ghost.btn-icon": {
      color: theme("colors.muted.foreground"),
    },
  });

  // // Only icon option
  // addComponents({
  //   ".btn-icon": {
  //     justifyContent: "center",
  //     flexShrink: "0",
  //     padding: "0",
  //     gap: "0",
  //     width: theme("custom.components.btn.DEFAULT.height"),
  //   },
  //   ".btn-icon.btn-xs": {
  //     width: theme("custom.components.btn.xs.height"),
  //   },
  //   ".btn-icon.btn-sm": {
  //     width: theme("custom.components.btn.sm.height"),
  //   },
  //   ".btn-icon.btn-lg": {
  //     width: theme("custom.components.btn.lg.height"),
  //   },
  // });

  // Icon sizes
  addComponents({
    ".btn-icon.btn-sm": {
      width: "2.8rem",
      heith: "2.8rem",

      'svg:not([role="img"]):not([class*="size-"])': {
        width: "1.4rem",
        heith: "1.4rem",
        fontSize: theme("fontSize.sm"),
      },
    },

    ".btn-icon.btn-md": {
      width: "3.4rem",
      heith: "3.4rem",

      'svg:not([role="img"]):not([class*="size-"])': {
        width: "1.4rem",
        heith: "1.4rem",
        fontSize: theme("fontSize.base"),
      },
    },

    ".btn-icon.btn-lg": {
      width: "4rem",
      heith: "4rem",

      'svg:not([role="img"]):not([class*="size-"])': {
        width: "1.4rem",
        heith: "1.4rem",
        fontSize: theme("fontSize.base"),
      },
    },
  });

  // Input Size
  addComponents({
    ".btn.btn-outline.btn-input": {
      fontWeight: theme("fontWeight.normal"),
      color: theme("colors.muted.foreground"),
    },

    ".btn.btn-outline.btn-sm.btn-input": {
      fontWeight: theme("fontWeight.normal"),
      color: theme("colors.muted.foreground"),
    },

    ".btn.btn-outline.btn-md.btn-input": {
      fontWeight: theme("fontWeight.normal"),
      color: theme("colors.muted.foreground"),
    },

    ".btn.btn-outline.btn-sm.btn-input": {
      gap: "0.8rem",
    },
    ".btn.btn-outline.btn-md.btn-input": {
      gap: "0.6rem",
    },

    ".btn.btn-outline.btn-lg.btn-input": {
      gap: "0.6rem",
    },
  });

  // Utilities
  addComponents({
    ".btn-rounded": {
      borderRadius: theme("custom.components.common.borderRadius.btn"),
    },
  });
});
