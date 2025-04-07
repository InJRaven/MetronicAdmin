import { fontSize, height, margin, padding, width } from "@mui/system";
import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".toaster.group": {
      ".toast": {
        minWidth: "56rem",
        padding: "1.4rem",
        gap: "1.6rem",
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        border: "1px solid hsl(var(--border))",
        ".toast-icon": {
          height: "3.6rem",
          width: "3.6rem",
          margin: 0,

          svg: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
          },
          i: {
            fontSize: "3.6rem",
          },
        },
        ".toast-content": {
          width: "100%",
        },
        ".toast-title": {
          fontSize: theme("fontSize.sm"),
        },
        ".toast-description": {
          color: "hsl(var(--muted-foreground))",
        },
        ".toast-close-button": {
          fontSize: theme("fontSize.xs"),
          transitionProperty: "color, background-color",
          transitionDuration: "150ms",
        },
        "[data-button]": {
          margin: 0,
          height: "4rem",
          padding: "0 1.6rem",
          fontSize: theme("fontSize.sm"),
          transitionProperty: "color, background-color",
          transitionDuration: "300ms",
        },
      },

      ".toast[data-type=loading]": {
        
      },
    },
  });

  //Color
  const dataTypes = ["info", "success", "warning", "error"];

  dataTypes.forEach((dataType) => {
    if (dataType === "error") {
      addComponents({
        ".toaster.group": {
          [`.toast[data-type="error"]`]: {
            backgroundColor: `var(--tw-danger-light)`,
            borderColor: `var(--tw-danger)`,
            ".toast-icon": {
              color: `var(--tw-danger)`,
            },

            ".toast-title": {
              color: `var(--tw-gray-800)`,
            },

            ".toast-description": {
              color: `var(--tw-gray-600)`,
            },

            ".toast-action-button": {
              backgroundColor: `var(--tw-danger)`,
              color: `var(--tw-danger-light)`,
              "&:hover": {
                backgroundColor: `var(--tw-danger-active)`,
                color: theme("colors.white"),
              },
            },

            ".toast-cancel-button": {
              backgroundColor: `var(--tw-danger-clarity)`,
              color: `var(--tw-danger)`,
              "&:hover": {
                backgroundColor: `var(--tw-danger-active)`,
                color: theme("colors.white"),
              },
            },
            ".toast-close-button": {
              backgroundColor: `var(--tw-danger-light)`,
              borderColor: `var(--tw-danger)`,
              color: `var(--tw-danger)`,
              "&:hover": {
                backgroundColor: `var(--tw-danger-active)`,
                color: theme("colors.white"),
              },
            },
          },
        },
      });
    } else {
      addComponents({
        ".toaster.group": {
          [`.toast[data-type=${dataType}]`]: {
            backgroundColor: `var(--tw-${dataType}-light)`,
            borderColor: `var(--tw-${dataType})`,
            ".toast-icon": {
              color: `var(--tw-${dataType})`,
            },

            ".toast-title": {
              color: `var(--tw-gray-800)`,
            },

            ".toast-description": {
              color: `var(--tw-gray-600)`,
            },

            ".toast-action-button": {
              backgroundColor: `var(--tw-${dataType})`,
              color: `var(--tw-${dataType}-light)`,
              "&:hover": {
                backgroundColor: `var(--tw-${dataType}-active)`,
                color: theme("colors.white"),
              },
            },
            ".toast-cancel-button": {
              backgroundColor: `var(--tw-${dataType}-clarity)`,
              color: `var(--tw-${dataType})`,
              "&:hover": {
                backgroundColor: `var(--tw-${dataType}-active)`,
                color: theme("colors.white"),
              },
            },
            ".toast-close-button": {
              backgroundColor: `var(--tw-${dataType}-light)`,
              borderColor: `var(--tw-${dataType})`,
              color: `var(--tw-${dataType})`,
              "&:hover": {
                backgroundColor: `var(--tw-${dataType}-active)`,
                color: theme("colors.white"),
              },
            },
          },
        },
      });
    }
  });
});
