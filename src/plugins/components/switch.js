import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents, theme, e }) => {
  addComponents({
    ".switch": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      cursor: "pointer",
      "input[type=checkbox]": {
        display: "flex",
        appearance: "none",
        backgroundColor: "var(--tw-gray-300)",
        position: "relative",
        cursor: "pointer",
        flexShrink: "0",
        borderRadius: theme("custom.components.switch.DEFAULT.height"),
        height: theme("custom.components.switch.DEFAULT.height"),
        width: theme("custom.components.switch.DEFAULT.width"),
        transition: "all .15s ease-in-out",
        "&:before": {
          display: "flex",
          position: "absolute",
          content: '""',
          height: "1.6rem",
          width: "1.6rem",
          borderRadius: "100%",
          backgroundColor: "var(--tw-light)",
          insetInlineStart: "0.4rem",
          top: "50%",
          transform: "translateY(-50%)",
          filter: "drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.03))",
          transition: "all .15s ease-in-out",
        },
        '&:checked, &[aria-checked="true"]': {
          backgroundColor: "var(--tw-primary)",
          transition: "all .15s ease-in-out",
          "&:before": {
            backgroundColor: "#ffffff",
            transition: "all .15s ease-in-out",
            insetInlineStart: "calc(100% - 0.4rem)",
            transform: "translate(-100%, -50%)",
            filter: "none",
          },
        },
        "&:disabled": {
          backgroundColor: "var(--tw-gray-100)",
          border: "1px solid var(--tw-gray-300)",
          cursor: "not-allowed",
          opacity: "0.5",
          "&:before": {
            backgroundColor: "var(--tw-gray-300)",
          },
          '&:checked, &[aria-checked="true"]': {
            backgroundColor: "var(--tw-primary-clarity)",
            border: "0",
            "&:before": {
              backgroundColor: "var(--tw-light)",
            },
          },
        },
      },
      ".switch-label": {
        color: "var(--tw-gray-700)",
        fontSize: theme("fontSize.sm"),
        fontWeight: theme("fontWeight.medium"),
        lineHeight: "1.6rem",
      },
      "input[type=checkbox] + .switch-label": {
        color: "var(--tw-gray-800)",
      },
      "&:has(input[type=checkbox]:disabled)": {
        ".switch-label": {
          color: "var(--tw-gray-500)",
        },
      },
    },
    ".switch-sm": {
      "input[type=checkbox]": {
        height: theme("custom.components.switch.sm.height"),
        width: theme("custom.components.switch.sm.width"),
        borderRadius: theme("custom.components.switch.sm.height"),
        "&:before": {
          height: "1.2rem",
          width: "1.2rem",
        },
      },
      ".switch-label": {
        "font-size": theme("fontSize.2sm"),
      },
    },
    ".switch-lg": {
      "input[type=checkbox]": {
        height: theme("custom.components.switch.lg.height"),
        width: theme("custom.components.switch.lg.width"),
        "border-radius": theme("custom.components.switch.lg.height"),
        "&:before": {
          height: "2rem",
          width: "2rem",
        },
      },
      ".switch-label": {
        "font-size": theme("fontSize.md"),
      },
    },
    "[dir=rtl] .switch": {
      "input[type=checkbox]": {
        '&:checked, &[aria-checked="true"]': {
          "&:before": {
            transform: "translate(100%, -50%)",
          },
        },
      },
    },
  });

  //Radix Switch
  addComponents({
    ".radix-switch": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      cursor: "pointer",
      "button[role=switch]": {
        display: "inline-flex",
        flexShrink: "0",
        cursor: "pointer",
        alignItems: "center",
        borderWidth: "2px",
        borderRadius: "9999px",
        borderColor: "transparent",
        outline: "none",
        height: theme("custom.components.switch.DEFAULT.height"),
        width: theme("custom.components.switch.DEFAULT.width"),
        '&[data-state="checked"]': {
          backgroundColor: "var(--tw-primary)",
          ".radix-circle": {
            backgroundColor: "#fff",
          },
        },

        '&[data-state="unchecked"]': {
          backgroundColor: "hsl(var(--input))",
        },

        "&:disabled": {
          backgroundColor: "var(--tw-gray-100)",
          cursor: "not-allowed",
          borderColor: "var(--tw-gray-300)",
          opacity: "0.5",
          '&[aria-checked="true"]': {
            backgroundColor: "var(--tw-light)",
          },
        },

        '&:disabled[aria-checked="true"]': {
          backgroundColor: "var(--tw-primary-clarity)",
          border: "0",
        },
        "&:focus-visible": {
          outline: "none",
        },
        ".radix-circle": {
          pointerEvents: "none",
          display: "block",
          height: "1.6rem",
          width: "1.6rem",
          borderRadius: "9999px",
          backgroundColor: "hsl(var(--background))",
          boxShadow: theme("boxShadow.lg"),
          transition: "all .15s ease-in-out",
          transform: "translateX(0)",
          '&[data-state="checked"]': {
            transform: "translateX(1.25rem)",
          },
          '&[data-state="unchecked"]': {
            transform: "translateX(0)",
          },
        },
      },
      ".radix-switch-label": {
        color: "var(--tw-gray-700)",
        fontSize: theme("fontSize.sm"),
        fontWeight: theme("fontWeight.medium"),
        lineHeight: "1.6rem",
      },
      "button[role=switch] + .radix-switch-label": {
        color: "var(--tw-gray-800)",
      },
      "&:has(button[role=switch]:disabled)": {
        ".radix-switch-label": {
          color: "var(--tw-gray-500)",
        },
      },
    },
    ".switch-sm": {
      "button[role=switch]": {
        height: theme("custom.components.switch.sm.height"),
        width: theme("custom.components.switch.sm.width"),
        borderRadius: theme("custom.components.switch.sm.height"),
        ".radix-circle": {
          height: "1.2rem",
          width: "1.2rem",
        },
      },
      ".radix-switch-label": {
        "font-size": theme("fontSize.2sm"),
      },
    },
    ".switch-lg": {
      "button[role=switch]": {
        height: theme("custom.components.switch.lg.height"),
        width: theme("custom.components.switch.lg.width"),
        "border-radius": theme("custom.components.switch.lg.height"),
        ".radix-circle": {
          height: "2rem",
          width: "2rem",
        },
      },
      ".radix-switch-label": {
        "font-size": theme("fontSize.md"),
      },
    },
  });
});
