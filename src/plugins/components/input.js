import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents, theme }) => {
  //Input
  addComponents({
    ".input": {
      display: "flex",
      width: "100%",
      backgroundColor: theme("colors.background"),
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme("colors.input"),
      color: theme("colors.foreground"),
      "--tw-shadow-color":
        "color-mix(in oklab, color-mix(in oklab, var(--color-black) 5%, transparent) var(--tw-shadow-alpha), transparent)",
      "--tw-shadow": " 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05))",
      transitionProperty: "color,box-shadow",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",
      boxShadow:
        "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",

      "::placeholder": {
        color:
          "color-mix(in oklab, color-mix(in oklab, var(--muted-foreground) 80%, transparent) var(--tw-shadow-alpha), transparent)",
      },

      "&:focus-visible": {
        "--tw-ring-color":
          "color-mix(in oklab, var(--color-ring) 30%, transparent)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        outline: "none",
        borderColor: theme("colors.ring"),
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },

      "&:disabled": {
        cursor: "not allowed",
        opacity: "0.5",
      },
      "&[readonly]": {
        opacity: "0.7",
      },
      "&[aria-invalid='true']": {
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",

        ".dark &": {
          "--tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
          borderColor: theme("colors.destructive.DEFAULT"),
        },
      },

      "&[type='file']": {
        paddingBlock: 0,
      },

      "&::file-selector-button": {
        height: "100%",
        backgroundColor: "transparent",
        fontWeith: theme("fontWeight.medium"),
        color: theme("colors.foreground"),
        padding: 0,
        border: 0,
        borderInlineEnd: "1px solid var(--input)",
      },
    },
  });

  //Input Size
  addComponents({
    ".input-lg": {
      height: "4rem",
      padding: "0 1.6rem",
      fontSize: theme("fontSize.sm"),
      borderRadius: theme("borderRadius.md"),
      "::file-selector-button": {
        paddingInlineEnd: "1.6rem",
        marginInlineEnd: "1.6rem",
      },
    },
    ".input-md": {
      height: "3.4rem",
      padding: "0 1.2rem",
      fontSize: theme("fontSize.2sm"),
      lineHeight: theme("fontSize.2sm.lineHeight.1"),
      borderRadius: theme("borderRadius.md"),
      "::file-selector-button": {
        paddingInlineEnd: "1.2rem",
        marginInlineEnd: "1.2rem",
      },
    },
    ".input-sm": {
      height: "2.8rem",
      padding: "0 1rem",
      fontSize: theme("fontSize.xs"),
      borderRadius: theme("borderRadius.md"),
      "::file-selector-button": {
        paddingInlineEnd: "1rem",
        marginInlineEnd: "1rem",
      },
    },
  });

  // Input Addon
  addComponents({
    ".input-addon": {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      justifyContent: "center",
      backgroundColor: theme("colors.muted.DEFAULT"),
      border: "1px solid var(--input)",
      color: theme("colors.secondary.foreground"),
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
    },

    ".input-addon-icon": {
      paddingInline: 0,
      justifyContent: "center",
    },
  });

  // Input Addon Size
  addComponents({
    ".input-addon-sm": {
      height: "2.8rem",
      minWidth: "2.8rem",
      borderRadius: theme("borderRadius.md"),
      fontSize: theme("fontSize.xs"),
      paddingInline: "1rem",
      "& svg:not([class*=size-])": {
        width: "1.4rem",
        height: "1.4rem",
      },

      i: {
        fontSize: theme("fontSize.sm"),
      },
    },
    ".input-addon-md": {
      height: "3.4rem",
      minWidth: "3.4rem",
      paddingInline: "1.2rem",
      fontSize: theme("fontSize.2sm"),
      lineHeight: theme("fontSize.2sm.lineHeight.1"),
      borderRadius: theme("borderRadius.md"),
      "& svg:not([class*=size-])": {
        width: "1.8rem",
        height: "1.8rem",
      },

      i: {
        fontSize: theme("fontSize.lg"),
      },
    },
    ".input-addon-lg": {
      height: "4rem",
      minWidth: "4rem",
      paddingInline: "1.6rem",
      fontSize: theme("fontSize.sm"),
      borderRadius: theme("borderRadius.md"),
      "& svg:not([class*=size-])": {
        width: "1.8rem",
        height: "1.8rem",
      },

      i: {
        fontSize: theme("fontSize.lg"),
      },
    },
  });

  // Input Group
  addComponents({
    ".input-group": {
      display: "flex",
      alignItems: "stretch",
      '[data-slot="input"]': {
        flexGrow: "1",
      },
      '[data-slot="input-addon"]:has(+[data-slot="input"])': {
        borderInlineEndWidth: "0",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
      '[data-slot="input"] + [data-slot="input-addon"]': {
        borderInlineStartWidth: "0",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      '[data-slot="input-addon"]:has(+[data-slot="button"])': {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
      '[data-slot="input"] + [data-slot="button"]': {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      '[data-slot="button"] + [data-slot="input"]': {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      '[data-slot="input-addon"] + [data-slot="input"]': {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      '[data-slot="input"]:has(+[data-slot="button"])': {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
      '[data-slot="input"]:has(+[data-slot="input-addon"])': {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
    },
  });

  // Input Wrapper
  addComponents({
    ".input-wrapper": {
      display: "flex",
      alignItems: "center",
      gap: theme("spacing[1.5]"),
      ":has(:focus-visible)": {
        "--tw-ring-color": "color-mix(in oklab, var(--ring) 30%, transparent)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        outline: "none",
        borderColor: theme("colors.ring"),
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },

      "&>[data-slot=input]": {
        display: "flex",
        width: "100%",
        height: "auto",
        outline: "none",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "150ms",
        color: theme("fontSize.foreground"),
        borderWidth: 0,
        backgroundColor: "transparent",
        padding: 0,
        boxShadow: "none",

        "&::placeholder": {
          color: theme("fontSize.muted.foreground"),
        },

        "&:focus-visible": {
          "--tw-ring-shadow":
            "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        },

        "&:disabled": {
          cursor: "not allowed",
          opacity: "0.5",
        },
      },

      "& >svg": {
        color: theme("colors.muted.foreground"),
      },
    },
  });

  // Input Wrapper Size
  addComponents({
    ".input-wrapper-sm": {
      gap: theme("spacing[1.25]"),
      "& svg:not([class*=size-])": {
        width: "1.4rem",
        height: "1.4rem",
      },
    },
    ".input-wrapper-md": {
      gap: theme("spacing[1.5]"),
      "& svg:not([class*=size-])": {
        width: "1.6rem",
        height: "1.6rem",
      },
    },

    ".input-wrapper-lg": {
      gap: theme("spacing[1.5]"),
      "& svg:not([class*=size-])": {
        width: "1.6rem",
        height: "1.6rem",
      },
    },
  });
});
