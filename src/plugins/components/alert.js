import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".alert": {
      display: "flex",
      alignItems: "stretch",
      width: "100%",
      gap: "0.8rem",

      ".toaster .group &": {
        width: "var(--width)",
      },
    },

    ".alert-content": {
      flex: 1,
      "& [data-slot=alert-title]": {
        fontWeight: theme("fontWeight.semibold"),
      },
      ":where(& > *:not(:last-child))": {
        "--tw-space-y-reverse": "0",
        marginBlockStart: "calc(0.8rem * var(--tw-space-y-reverse))",
        marginBlockEnd: "calc(0.8rem * calc(1 - var(--tw-space-y-reverse)))",
      },
    },
    ".alert-description": {
      fontSize: theme("fontSize.sm"),
      "& p": {
        lineHeight: 1.625,
        marginBottom: "0.8rem",
      },
    },
  });

  // Size
  addComponents({
    ".alert.alert-lg": {
      borderRadius: theme("borderRadius.lg"),
      padding: "1.6rem",
      gap: "1.2rem",
      fontSize: theme("fontSize.base"),
      '& > [data-slot="alert-icon"] > svg': {
        width: "3.2rem",
        height: "3.2rem",
      },
      '& > [data-slot="alert-icon"]': {
        marginTop: "0px",
      },
      '& > [data-slot="alert-close"]': {
        marginTop: "2px",
        marginInlineEnd: "-2px",
      },
    },
    ".alert.alert-md": {
      borderRadius: theme("borderRadius.lg"),
      padding: "1.4rem",
      gap: "1rem",
      fontSize: theme("fontSize.sm"),
      '[data-slot="alert-icon"] > svg': {
        width: "2rem",
        height: "2rem",
      },
      '[data-slot="alert-icon"]': {
        marginTop: "0px",
      },
      '[data-slot="alert-close"]': {
        marginInlineEnd: "-2px",
      },
    },
    ".alert.alert-sm": {
      borderRadius: theme("borderRadius.md"),
      padding: "1rem 1.2rem",
      fontSize: theme("fontSize.xs"),
      '[data-slot="alert-icon"] > svg': {
        width: "1.6rem",
        height: "1.6rem",
      },
      '[data-slot="alert-icon"]': {
        marginTop: "0px",
      },
      '[data-slot="alert-close"]': {
        marginInlineEnd: "-2px",
      },
      '& > [data-slot="alert-close"] > svg': {
        width: "1.4rem !important",
        height: "1.4rem !important",
      },
    },

    ".appearance-outline, .appearance-stroke, .appearance-light": {
      border: "1px solid " + theme("colors.border"),
    },
  });

  const variants = [
    "secondary",
    "primary",
    "destructive",
    "success",
    "info",
    "mono",
    "warning",
  ];

  variants.forEach((v) => {
    if (v === "secondary") {
      addComponents({
        ".alert-secondary": {
          "&.appearance-solid": {
            backgroundColor: theme("colors.muted.DEFAULT"),
            color: theme("colors.foreground"),
            "[data-alert-close]": {
              color: theme("colors.foreground"),
            },
          },
          "&.appearance-outline": {
            backgroundColor: theme("colors.background"),
            color: theme("colors.foreground"),
            "[data-alert-close]": {
              color: theme("colors.foreground"),
            },
          },
          "&.appearance-stroke": {
            backgroundColor: theme("colors.background"),
            color: theme("colors.foreground"),
            "& > div:first-of-type > svg": {
              color: theme("colors.foreground"),
            },
          },
          "&.appearance-light": {
            backgroundColor: theme("colors.muted.DEFAULT"),
            color: theme("colors.foreground"),
          },
        },
      });
    } else if (v === "mono") {
      addComponents({
        ".alert-mono": {
          "&.appearance-solid": {
            backgroundColor: theme("colors.mono.DEFAULT"),
            color: theme("colors.mono.foreground"),
            "[data-alert-close]": {
              color: theme("colors.mono.foreground"),
            },
          },
          "&.appearance-outline": {
            backgroundColor: theme("colors.background"),
            color: theme("colors.mono.DEFAULT"),
            "[data-alert-close]": {
              color: theme("colors.mono.DEFAULT"),
            },
          },
          "&.appearance-stroke": {
            backgroundColor: theme("colors.background"),
            color: theme("colors.foreground"),
            "& > div:first-of-type > svg": {
              color: theme("colors.foreground"),
            },
          },
          "&.appearance-light": {
            backgroundColor: theme("colors.muted.DEFAULT"),
            color: theme("colors.foreground"),
          },
        },
      });
    } else {
      addComponents({
        [`.alert-${v}`]: {
          "&.appearance-solid": {
            backgroundColor: theme(`colors.${v}.DEFAULT`),
            color: theme(`colors.${v}.foreground`),
            "[data-alert-close]": {
              color: theme(`colors.${v}.foreground`),
            },
          },
          "&.appearance-outline": {
            backgroundColor: theme("colors.background"),
            color: theme("colors.foreground"),
            "[data-alert-close]": {
              color: theme("colors.foreground"),
            },
          },
          "&.appearance-stroke": {
            backgroundColor: theme("colors.background"),
            "& > div:first-of-type > svg": {
              color: theme(`colors.${v}.DEFAULT`),
            },
          },
          "&.appearance-light": {
            backgroundColor:
              v === "primary" || v === "destructive"
                ? `color-mix(in oklab,var(--${v}) 5%,transparent)`
                : theme(`colors.${v}.light`),
            borderColor:
              v === "primary" || v === "destructive"
                ? `color-mix(in oklab,var(--${v}) 10%,transparent)`
                : `color-mix(in oklab,var(--${v}) 10%,transparent)`,
            "& > div:first-of-type > svg": {
              color: theme(`colors.${v}.DEFAULT`),
            },
            ".dark &": {
              backgroundColor:
                v === "primary" || v === "destructive"
                  ? `color-mix(in oklab,var(--${v}) 10%,transparent)`
                  : `color-mix(in oklab,var(--tw-${v}-light) 30%,transparent)`,
              borderColor:
                v === "primary" || v === "destructive"
                  ? `color-mix(in oklab,var(--${v}) 10%,transparent)`
                  : `color-mix(in oklab,var(--tw-${v}-light) 30%,transparent)`,
            },
          },
        },
      });
    }
  });

  const iconVarianst = ["primary", "destructive", "success", "info", "warning"];

  iconVarianst.forEach((i) => {
    addComponents({
      [`.alert-mono.icon-${i}`]: {
        "& > div:first-of-type > svg": {
          color: theme(`colors.${i}.DEFAULT`),
        },
      },
    });
  });
});
