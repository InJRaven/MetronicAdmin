import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".card": {
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--tw-card-box-shadow)",
      backgroudColor: "var(--tw-card-background-color)",
      borderRadius: theme("custom.components.common.borderRadius.card"),
      border: "var(--tw-card-border)",
    },
    ".card-title": {
      fontSize: theme("fontSize.base"),
      lineHeight: theme("fontSize.base.1.lineHeight"),
      fontWeight: theme("fontWeight.semibold"),
      color: "var(--tw-gray-900)",
    },
    ".card-header": {
      display: "flex",
      minHeight: "5.6rem",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "var(--tw-card-border)",
      paddingInlineStart: theme("custom.components.card.px"),
      paddingInlineEnd: theme("custom.components.card.px"),
      paddingTop: theme("custom.components.card.py.header"),
      paddingBottom: theme("custom.components.card.py.header"),
    },
    ".card-body": {
      flexGlow: 1,
      paddingInlineStart: theme("custom.components.card.px"),
      paddingInlineEnd: theme("custom.components.card.px"),
      paddingTop: theme("custom.components.card.py.body"),
      paddingBottom: theme("custom.components.card.py.body"),
    },
    ".card-description": {
      fontSize: theme("fontSize.2sm"),
      color: "hsl(var(--muted-foreground))",
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "var(--tw-card-border)",
      paddingInlineStart: theme("custom.components.card.px"),
      paddingInlineEnd: theme("custom.components.card.px"),
      paddingTop: theme("custom.components.card.py.footer"),
      paddingBottom: theme("custom.components.card.py.footer"),
    },
    ".card-table": {
      table: {
        "th:first-child": {
          borderStartStartRadius: theme(
            "custom.components.common.borderRadius.card"
          ),
        },
        "th:last-child": {
          borderStartEndRadius: theme(
            "custom.components.common.borderRadius.card"
          ),
        },
        "th:first-child, td:first-child": {
          paddingInlineStart: theme("custom.components.card.px"),
        },
        "th:last-child, td:last-child": {
          paddingInlineEnd: theme("custom.components.card.px"),
        },
        "&.table-border": {
          border: "0",
        },
      },
    },
    ".card-group": {
      paddingInlineStart: theme("custom.components.card.px"),
      paddingInlineEnd: theme("custom.components.card.px"),
      paddingTop: theme("custom.components.card.py.group"),
      paddingBottom: theme("custom.components.card.py.group"),
      borderBottom: "var(--tw-card-border)",
      "&:last-child": {
        borderBottom: "0",
      },
      "& + .card-footer": {
        borderTop: "0",
      },
    },
  });

  addComponents({
    ".table": {
      "th:first-child": {
        borderStartStartRadius: theme(
          "custom.components.common.borderRadius.card"
        ),
      },
      "th:last-child": {
        borderStartEndRadius: theme(
          "custom.components.common.borderRadius.card"
        ),
      },
    },
    ".card-header + .card-body, .card-header + .card-table": {
      table: {
        "th:first-child, th:last-child": {
          borderRadius: "0",
        },
      },
    },
  });

  // Grid
  addComponents({
    ".card-grid": {
      ".card-header, .card-footer": {
        paddingInlineStart: theme("custom.components.card.grid.px"),
        paddingInlineEnd: theme("custom.components.card.grid.px"),
      },
      ".card-body": {
        padding: 0,
        ".table": {
          border: 0,

          "th:first-child, td:first-child": {
            paddingInlineStart: theme("custom.components.card.grid.px"),
            "&.table-cell-center": {
              paddingInlineEnd: theme("custom.components.card.grid.px"),
            },
          },
          "th:last-child, td:last-child": {
            paddingInlineEnd: theme("custom.components.card.grid.px"),
            "&.table-cell-center": {
              paddingInlineStart: theme("custom.components.card.grid.px"),
            },
          },
        },
      },
    },
  });

  addComponents({
    ".card-border": {
      border: "var(--tw-card-border)",
    },
    ".card-rounded": {
      borderRadius: theme("custom.components.common.borderRadius.card"),
      "&.table": {
        borderCollapse: "separate",
        borderSpacing: "0",
      },
    },
    ".card-rounded-b": {
      borderEndStartRadius: theme("custom.components.common.borderRadius.card"),
      borderEndEndRadius: theme("custom.components.common.borderRadius.card"),
    },
    ".card-rounded-bs": {
      borderEndStartRadius: theme("custom.components.common.borderRadius.card"),
    },
    ".card-rounded-be": {
      borderEndEndRadius: theme("custom.components.common.borderRadius.card"),
    },
    ".card-rounded-t": {
      borderStartStartRadius: theme(
        "custom.components.common.borderRadius.card"
      ),
      borderStartEndRadius: theme("custom.components.common.borderRadius.card"),
    },
    ".card-rounded-ts": {
      borderStartStartRadius: theme(
        "custom.components.common.borderRadius.card"
      ),
    },
    ".card-rounded-te": {
      borderStartEndRadius: theme("custom.components.common.borderRadius.card"),
    },
  });
});
