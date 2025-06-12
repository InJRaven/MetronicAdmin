import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".switch": {
      position: "relative",
      cursor: "pointer",
      display: "inline-flex",
      flexShrink: 0,
      alignItems: "center",
      borderRadius: "9999px",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",

      "&:focus-visible": {
        "--tw-ring-offset-color": theme("colors.background"),
        "--tw-ring-offset-width": "2px",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        outline: "none",
      },

      "&:disabled": {
        cursor: "not allowed",
        opacity: "0.5",
      },

      "&[data-state='unchecked']": {
        backgroundColor: theme("colors.input"),
      },
      "&[aria-invalid='true']": {
        " --tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
        borderWidth: "1px",
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",
        ".dark &": {
          " --tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
          borderColor: theme("colors.destructive.DEFAULT"),
        },
      },
      "[data-invalid='true'] &": {
        " --tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
        borderWidth: "1px",
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",
        ".dark &": {
          " --tw-ring-color":
            "color-mix(in oklab, var(--destructive) 20%, transparent)",
          borderColor: theme("colors.destructive.DEFAULT"),
        },
      },
    },
  });

  // Permanent
  const variants = ["primary", "mono"];

  variants.forEach((v) => {
    addComponents({
      [`.switch.permanent.switch-${v}`]: {
        backgroundColor: theme("colors.input"),
      },

      [`.switch.switch-${v}[data-state='checked']`]: {
        backgroundColor: theme(`colors.${v}.DEFAULT`),
      },

      ".switch.permanent .switch-indicator.on": {
        insetInlineStart: "0",
      },
      ".switch.permanent .switch-indicator.off": {
        insetInlineEnd: "0",
      },
    });
  });

  // Shape
  addComponents({
    ".pill": {
      borderRadius: "9999px",
    },
    ".square": {
      borderRadius: theme("borderRadius.md"),
    },
  });
  // size
  addComponents({
    ".switch-sm": {
      height: "2rem",
      width: "3.2rem",
    },
    ".switch-md": {
      height: "2.4rem",
      width: "4rem",
    },
    ".switch-lg": {
      height: "3.2rem",
      width: "5.6rem",
    },
    ".switch-xl": {
      height: "3.6rem",
      width: "6.4rem",
    },
  });

  // Switch Thumb
  addComponents({
    ".switch": {
      ".switch-thumb": {
        "--tw-shadow":
          "0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1))",
        pointerEvents: "none",
        display: "block",
        backgroundColor: theme("colors.white"),
        width: "50%",
        height: "calc(100% - 4px)",
        transitionProperty: "transform",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "150ms",
        insetInlineStart: "0px",
        boxShadow:
          "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
      },
      "&[data-state='unchecked'] .switch-thumb": {
        transform: "translateX(2px)",
      },
      "&[data-state='checked'] .switch-thumb": {
        transform: "translateX(calc(100% - 2px))",
      },
      ":is([dir='rtl']) &[data-state='unchecked'] .switch-thumb": {
        transform: "translateX(-2px)",
      },
      ":is([dir='rtl']) &[data-state='checked'] .switch-thumb": {
        transform: "translateX(calc(-100% + 2px))",
      },
      "&.switch-xs.square .switch-thumb": {
        borderRadius: theme("borderRadius.sm"),
      },
    },
  });

  // Switch Indicator
  addComponents({
    ".switch-indicator": {
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      margin: "0 2px",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.medium"),
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      transitionDuration: "300ms",
    },

    ":is(:where(.peer)[data-state=unchecked]) ~ .switch-indicator.on": {
      color: theme("colors.primary.foreground"),
      visibility: "hidden",
      transform: "translateY(-50%) translateX(100%)",
    },
    ":is(:where(.peer)[data-state=unchecked][dir='rtl']) ~ .switch-indicator.on":
      {
        transform: "translateY(-50%) translateX(-100%)",
      },

    ":is(:where(.peer)[data-state=checled]) ~  .switch-indicator.off": {
      visibility: "hidden",
      transform: "translateY(-50%) translateX(-100%)",
    },
    ":is(:where(.peer)[data-state=checked][dir='rtl']) ~ .switch-indicator.off":
      {
        transform: "translateY(-50%) translateX(-100%)",
      },
    ":is(:where(.peer)[data-state=unchecked][dir='rtl']) ~ .switch-indicator.off":
      {
        transform: "translateY(-50%) translateX(0)",
      },

    ":is(:where(.peer)[data-state=unchecked]) ~ .switch-indicator.off": {
      transform: "translateY(-50%) translateX(100%)",
    },

  });
});
