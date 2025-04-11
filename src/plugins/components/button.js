import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".btn": {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      lineHeight: 1,
      border: "1px solid transparent",
      height: theme("custom.components.btn.DEFAULT.height"),
      borderRadius: theme("custom.components.common.borderRadius.btn"),
      paddingInlineStart: theme("custom.components.btn.DEFAULT.px"),
      paddingInlineEnd: theme("custom.components.btn.DEFAULT.px"),
      gap: theme("custom.components.btn.DEFAULT.gap"),
      fontWeight: theme("custom.components.btn.DEFAULT.fontWeight"),
      fontSize: theme("custom.components.btn.DEFAULT.fontSize"),
      
      transition: "all .2s ease",
    },
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
    },
    ".btn-xs": {
      height: theme("custom.components.btn.xs.height"),
      paddingInlineStart: theme("custom.components.btn.xs.px"),
      paddingInlineEnd: theme("custom.components.btn.xs.px"),
      fontWeight: theme("custom.components.btn.xs.fontWeight"),
      fontSize: theme("custom.components.btn.xs.fontSize"),
      gap: theme("custom.components.btn.xs.gap"),
      "&.btn-icon": {
        width: theme("custom.components.btn.xs.height"),
      },
    },
    ".btn-sm": {
      height: theme("custom.components.btn.sm.height"),
      paddingInlineStart: theme("custom.components.btn.sm.px"),
      paddingInlineEnd: theme("custom.components.btn.sm.px"),
      fontWeight: theme("custom.components.btn.sm.fontWeight"),
      fontSize: theme("custom.components.btn.sm.fontSize"),
      gap: theme("custom.components.btn.sm.gap"),
      "&.btn-icon": {
        width: theme("custom.components.btn.sm.height"),
      },
    },
    ".btn-lg": {
      height: theme("custom.components.btn.lg.height"),
      paddingInlineStart: theme("custom.components.btn.lg.px"),
      paddingInlineEnd: theme("custom.components.btn.lg.px"),
      fontWeight: theme("custom.components.btn.lg.fontWeight"),
      fontSize: theme("custom.components.btn.lg.fontSize"),
      gap: theme("custom.components.btn.lg.gap"),
      "&.btn-icon": {
        width: theme("custom.components.btn.lg.height"),
      },
    },
  });

  // Disabled state
  addComponents({
    ".btn": {
      "&[disabled], &.disabled": {
        opacity: "0.5",
        "pointer-events": "none",
      },
    },
  });

  // Only icon option
  addComponents({
    ".btn-icon": {
      justifyContent: "center",
      flexShrink: "0",
      padding: "0",
      gap: "0",
      width: theme("custom.components.btn.DEFAULT.height"),
    },
    ".btn-icon.btn-xs": {
      width: theme("custom.components.btn.xs.height"),
    },
    ".btn-icon.btn-sm": {
      width: theme("custom.components.btn.sm.height"),
    },
    ".btn-icon.btn-lg": {
      width: theme("custom.components.btn.lg.height"),
    },
  });

  // Icon sizes
  addComponents({
    ".btn": {
      i: {
        fontSize: theme("custom.components.btn.DEFAULT.iconFontSize"),
        lineHeight: "0 !important",
      },
    },
    ".btn-icon": {
      i: {
        fontSize: theme("custom.components.btn.DEFAULT.onlyIconFontSize"),
      },
    },
    ".btn-xs": {
      i: {
        fontSize: theme("custom.components.btn.xs.iconFontSize"),
      },
      "&.btn-icon": {
        i: {
          fontSize: theme("custom.components.btn.xs.onlyIconFontSize"),
        },
      },
    },
    ".btn-sm": {
      i: {
        fontSize: theme("custom.components.btn.sm.iconFontSize"),
      },
      "&.btn-icon": {
        i: {
          fontSize: theme("custom.components.btn.sm.onlyIconFontSize"),
        },
      },
    },
    ".btn-lg": {
      i: {
        fontSize: theme("custom.components.btn.lg.iconFontSize"),
      },
      "&.btn-icon": {
        i: {
          fontSize: theme("custom.components.btn.lg.onlyIconFontSize"),
        },
      },
    },
    ".btn-icon-xs": {
      i: {
        fontSize: `${theme("fontSize.xs")}`,
      },
    },
    ".btn-icon-sm": {
      i: {
        fontSize: `${theme("fontSize.sm")}`,
      },
    },
    ".btn-icon-md": {
      i: {
        fontSize: `${theme("fontSize.md")}`,
      },
    },
    ".btn-icon-lg": {
      i: {
        fontSize: `${theme("fontSize.lg")}`,
      },
    },
    ".btn-icon-xl": {
      i: {
        fontSize: `${theme("fontSize.xl")}`,
      },
    },
    ".btn-icon-2xl": {
      i: {
        fontSize: `${theme("fontSize.2xl")}`,
      },
    },
  });

  // Link varaint
  addComponents({
    ".btn-link": {
      color: "var(--tw-primary)",
      fontSize: theme("fontSize.2sm"),
      height: "auto",
      paddingBottom: "0.4em",
      paddingInlineStart: "0",
      paddingInlineEnd: "0",
      borderRadius: "0",
      backgroundColor: "transparent",
      borderBottom: "1px dashed var(--tw-primary)",
      "&:focus": {
        outline: "none",
      },
      "&:hover, &:active, &.active": {
        backgroundColor: "transparent",
        borderBottom: "1px dashed var(--tw-primary-active)",
        color: "var(--tw-primary-active)",
      },
      "&.btn-sm": {
        fontSize: theme("fontSize.xs"),
      },
      "&.btn-lg": {
        fontSize: theme("fontSize.sm"),
      },
    },
  });

  // Tabs
  addComponents({
    ".btn-tabs": {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: "1",
      backgroundColor: "var(--tw-gray-100)",
      border: "1px solid var(--tw-gray-200)",
      ".btn": {
        color: "var(--tw-gray-700)",
        i: {
          color: "var(--tw-gray-400)",
        },
        "&:hover, &:active, &.active": {
          backgroundColor: "var(--tw-light)",
          border: "1px solid var(--tw-gray-200)",
          color: "var(--tw-gray-900)",
          boxShadow: "var(--tw-light-box-shadow)",
          i: {
            color: "var(--tw-gray-500)",
          },
        },
      },
    },
  });

  // Tabs sizes
  addComponents({
    ".btn-tabs": {
      borderRadius: theme("custom.components.common.borderRadius.btn"),
      height: theme("custom.components.btn.DEFAULT.height"),
      padding: theme("custom.components.btn.DEFAULT.tabsGap"),
      gap: theme("custom.components.btn.DEFAULT.tabsGap"),
      ".btn": {
        i: {
          fontSize: theme("custom.components.btn.DEFAULT.iconFontSize"),
        },
        height: `calc(${theme(
          "custom.components.btn.DEFAULT.height"
        )} - 2 * ${theme("custom.components.btn.DEFAULT.tabsGap")})`,
        "&.btn-icon": {
          width: `calc(${theme(
            "custom.components.btn.DEFAULT.height"
          )} - 2 * ${theme("custom.components.btn.DEFAULT.tabsGap")})`,
        },
      },
      "&.btn-tabs-sm": {
        height: theme("custom.components.btn.sm.height"),
        padding: theme("custom.components.btn.sm.tabsGap"),
        gap: theme("custom.components.btn.sm.tabsGap"),
        ".btn": {
          i: {
            fontSize: theme("custom.components.btn.sm.iconFontSize"),
          },
          height: `calc(${theme(
            "custom.components.btn.sm.height"
          )} - 2 * ${theme("custom.components.btn.sm.tabsGap")})`,
          "&.btn-icon": {
            width: `calc(${theme(
              "custom.components.btn.sm.height"
            )} - 2 * ${theme("custom.components.btn.sm.tabsGap")})`,
          },
        },
      },
      "&.btn-tabs-lg": {
        height: theme("custom.components.btn.lg.height"),
        padding: theme("custom.components.btn.lg.tabsGap"),
        gap: theme("custom.components.btn.lg.tabsGap"),
        ".btn": {
          i: {
            fontSize: theme("custom.components.btn.lg.iconFontSize"),
          },
          height: `calc(${theme(
            "custom.components.btn.lg.height"
          )} - 2 * ${theme("custom.components.btn.lg.tabsGap")})`,
          "&.btn-icon": {
            width: `calc(${theme(
              "custom.components.btn.lg.height"
            )} - 2 * ${theme("custom.components.btn.lg.tabsGap")})`,
          },
        },
      },
    },
  });

  // Input
  addComponents({
    ".btn-input": {
      cursor: "auto",
      color: "var(--tw-gray-700)",
      borderColor: "var(--tw-gray-300)",
      backgroundColor: "var(--tw-light-active)",
      i: {
        color: "var(--tw-gray-500)",
      },
    },
  });

  // Color varaints
  const colors = [
    "primary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
    "secondary",
  ];

  colors.forEach((color) => {
    if (color === "light") {
      addComponents({
        ".btn-light": {
          color: "var(--tw-gray-700)",
          borderColor: "var(--tw-gray-300)",
          backgroundColor: "var(--tw-light)",
          i: {
            color: "var(--tw-gray-500)",
          },
          "&:hover, &:active, &.active": {
            borderColor: "var(--tw-gray-300)",
            backgroundColor: "var(--tw-light-active)",
            boxShadow: "var(--tw-default-box-shadow)",
            color: "var(--tw-gray-800)",
            i: {
              color: "var(--tw-gray-600)",
            },
          },
          "&[disabled], &.disabled": {
            opacity: "1",
            color: "var(--tw-gray-500)",
            borderColor: "var(--tw-gray-200)",
            backgroundColor: "var(--tw-light)",
            i: {
              color: "var(--tw-gray-400)",
            },
          },
        },
        ".btn-light.btn-clear": {
          borderColor: "transparent",
          backgroundColor: "transparent",
          color: "var(--tw-gray-700)",
          i: {
            color: "var(--tw-gray-600)",
          },
          "&:hover, &:active, &.active": {
            backgroundCcolor: "var(--tw-gray-200)",
            borderColor: "transparent",
            boxShadow: "none",
            color: "var(--tw-gray-800)",
            i: {
              color: "var(--tw-gray-700)",
            },
          },
          "&[disabled], &.disabled": {
            opacity: "1",
            color: "var(--tw-gray-500)",
            borderColor: "transparent",
            backgroundColor: "transparent",
            i: {
              color: "var(--tw-gray-400)",
            },
          },
        },
      });
    } else if (color === "secondary") {
      addComponents({
        ".btn-secondary": {
          color: "var(--tw-gray-700)",
          borderColor: "var(--tw-gray-200)",
          backgroundColor: "var(--tw-secondary)",
          i: {
            color: "var(--tw-gray-500)",
          },
          "&:hover, &:active, &.active": {
            borderColor: "var(--tw-gray-300)",
            backgroundColor: "var(--tw-secondary-active)",
            boxShadow: "var(--tw-default-box-shadow)",
            color: "var(--tw-gray-800)",
            i: {
              color: "var(--tw-gray-600)",
            },
          },
          "&[disabled], &.disabled": {
            opacity: "1",
            color: "var(--tw-gray-500)",
            borderColor: "var(--tw-gray-200)",
            backgroundColor: "var(--tw-light)",
            i: {
              color: "var(--tw-gray-400)",
            },
          },
        },
      });
    } else {
      addComponents({
        [`.btn-${color}`]: {
          color: theme("colors.white"),
          backgroundColor: `var(--tw-${color})`,
          "&:hover, &:active, &.active": {
            backgroundColor: `var(--tw-${color}-active)`,
            boxShadow: `var(--tw-${color}-box-shadow)`,
          },
        },
        [`.btn-outline.btn-${color}`]: {
          color: `var(--tw-${color})`,
          backgroundColor: `var(--tw-${color}-light)`,
          borderColor: `var(--tw-${color}-clarity)`,
          i: {
            color: `var(--tw-${color})`,
          },
          "&:hover, &:active, &.active": {
            color: `var(--tw-${color}-inverse)`,
            backgroundColor: `var(--tw-${color})`,
            borderColor: `var(--tw-${color})`,
            boxShadow: `none`,
            i: {
              color: `var(--tw-${color}-inverse)`,
            },
          },
        },
        [`.btn-clear.btn-${color}`]: {
          borderColor: "transparent",
          backgroundColor: "transparent",
          color: `var(--tw-${color})`,
          "&:hover, &:active, &.active": {
            color: `var(--tw-${color}-inverse)`,
            backgroundColor: `var(--tw-${color})`,
            borderColor: `var(--tw-${color})`,
            boxShadow: "none",
            i: {
              color: `var(--tw-${color}-inverse)`,
            },
          },
        },
        [`.btn-subtle.btn-${color}`]: {
          borderColor: "transparent",
          backgroundColor: "transparent",
          color: `var(--tw-${color})`,
          i: {
            color: `var(--tw-${color})`,
          },
          "&:hover, &:active, &.active": {
            color: `var(--tw-${color})`,
            backgroundColor: `var(--tw-${color}-light)`,
            borderColor: `var(--tw-${color}-light)`,
            boxShadow: `none`,
            i: {
              color: `var(--tw-${color})`,
            },
          },
        },
      });
    }
  });

  //hidden Button
  addComponents({
    ".btn-outline.btn-secondary,.btn-outline.btn-light,.btn-outline.btn-dark,.btn-clear.btn-secondary,.btn-clear.btn-dark,.btn-subtle.btn-secondary,.btn-subtle.btn-light,.btn-subtle.btn-dark ":
      {
        display: "none",
      },
  });

  // Utilities
  addComponents({
    ".btn-rounded": {
      borderRadius: theme("custom.components.common.borderRadius.btn"),
    },
  });
});
