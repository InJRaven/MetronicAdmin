import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".calendar-wrapper": {
      display: "flex",
      flexDirection: "column",
      width: "fit-content",
      gap: "1.2rem 1rem",

      ".calendar": {
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "start",
        border: "1px solid var(--tw-gray-200)",
        backgroundColor: "var(--tw-light)",
        transitionProperty: "background-color, border-color",
        transitionDuration: "200ms",
        "&__month": {
          padding: "1rem",
        },
        "&__header": {
          display: "flex",
          padding: "0.4rem 0",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("fontSize.sm.1.lineHeight"),
          fontWeight: theme("fontWeight.semibold"),
          color: "var(--tw-gray-900)",
          transitionProperty: "color",
          transitionDuration: "200ms",
        },
        "&__body": {
          "th, td": {
            textAlign: "center",
            fontSize: theme("fontSize.2sm"),
            fontWeight: theme("fontWeight.medium"),
            lineHeight: "1.4rem",

            transitionProperty: "color, background-color",
            transitionDuration: "200ms",
          },
          th: {
            padding: "1rem",
            color: "var(--tw-gray-700)",
          },
          ".day": {
            height: "3.2rem",
            width: "3.8rem",
            ".weeks__item--button": {
              padding: "0 1rem",
              height: "100%",
              width: "100%",
              backgroundColor: "transparent",
            },
          },
          
          ".week__number": {
            color: "var(--tw-gray-600)",
            borderRight: "1px solid var(--tw-gray-300)",
          },
        },
      },
    },
  });

  addComponents({
    ".day": {
      color: "var(--tw-gray-900)",
      "&.today": {
        borderRadius: "0.6rem",
        backgroundColor: "hsl(var(--accent))",
        color: "hsl(var(--accent-foreground))",
      },

      "&.outsite": {
        color: "var(--tw-gray-400)",
      },

      "&:not(.today):not(.outsite):not(.selected):hover": {
        borderRadius: "0.6rem",

        backgroundColor: "var(--tw-primary-light)",
        color: "var(--tw-primary)",
      },

      "&.selected": {
        borderRadius: "0.6rem",
        backgroundColor: "var(--tw-primary)",
        color: "hsl(var(--primary-foreground ))",
        "&:hover": {
          backgroundColor: "var(--tw-primary)",
          color: "hsl(var(--primary-foreground ))",
        },
        "&:focus": {
          backgroundColor: "var(--tw-primary)",
          color: "hsl(var(--primary-foreground ))",
        },

        "&.day-range-start": {
          borderRadius: "0.6rem 0 0 0.6rem",
        },
        "&.day-range-end": {
          borderRadius: "0 0.6rem 0.6rem 0",
        },
        "&.day-range-middle": {
          borderRadius: 0,
          backgroundColor: "var(--tw-primary-light)",
          color: "var(--tw-primary)",
        },
      },
    },
  });
});
