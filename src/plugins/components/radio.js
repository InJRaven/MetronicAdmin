import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".radio-group": {
      display: "grid",
      gap: theme("spacing[2.5]"),

      ".radio": {
        "--tw-ring-offset-color": theme("colors.background"),
        aspectRatio: "1 / 1",
        borderRadius: "9999px",
        outlineStyle: "none",

        "&:focus": {
          outline: "none",
        },

        "&:focus-visible": {
          "--tw-ring-color": theme("colors.ring"),
          "--tw-ring-offset-width": "2px",
          "--tw-ring-shadow":
            "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        },

        "&:disabled": {
          cursor: "not allowed",
          opacity: "0.5",
        },

        "&[aria-invalid='true']": {
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 10%, transparent)",
          borderColor:
            "color-mix(in oklab, var(--destructive) 60%, transparent)",
        },

        ".dark &[aria-invalid='true']": {
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
          borderColor: theme("colors.destructive.DEFAULT"),
        },

        '[data-invalid="true"] &': {
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 10%, transparent)",
          borderColor:
            "color-mix(in oklab, var(--destructive) 60%, transparent)",
        },

        '.dark [data-invalid="true"] &': {
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
          borderColor: theme("colors.destructive.DEFAULT"),
        },

        ".radio-indicator": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  });

  //Radio Variant
  addComponents({
    ".radio": {
      "&.radio-primary": {
        borderColor: theme("colors.input"),
        color: theme("colors.primary.DEFAULT"),
        "&[data-state=checked]": {
          backgroundColor: theme("colors.primary.DEFAULT"),
          borderColor: theme("colors.primary.DEFAULT"),
          color: theme("colors.primary.foreground"),
        },
      },
      "&.radio-mono": {
        borderColor: theme("colors.input"),
        color: theme("colors.mono.DEFAULT"),
        "&[data-state=checked]": {
          backgroundColor: theme("colors.mono.DEFAULT"),
          borderColor: theme("colors.mono.DEFAULT"),
          color: theme("colors.mono.foreground"),
        },
      },
    },
  });

  // Radio Size
  addComponents({
    ".radio": {
      "&.radio-sm": {
        height: "1.8rem",
        width: "1.8rem",
        "& svg": {
          height: "0.8rem",
          width: "0.8rem",
        },
      },
      "&.radio-md": {
        height: "2rem",
        width: "2rem",
        "& svg": {
          height: "1rem",
          width: "1rem",
        },
      },
      "&.radio-lg": {
        height: "2.2rem",
        width: "2.2rem",
        "& svg": {
          height: "1.2rem",
          width: "1.2rem",
        },
      },
    },
  });
});
