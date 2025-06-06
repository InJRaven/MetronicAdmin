import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".card": {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      color: theme("colors.card.foreground"),
      backgroundColor: "var(--tw-card-background-color)",
      borderRadius: theme("custom.components.common.borderRadius.card"),
      border: "var(--tw-card-border)",

      ".card-title": {
        fontSize: theme("fontSize.base"),
        lineHeight: 1,
        fontWeight: theme("fontWeight.semibold"),
        letterSpacing: "-0.025em",
        color: "var(--tw-gray-900)",
      },
      ".card-header": {
        display: "flex",
        minHeight: "5.6rem",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "space-between",
        borderBottom: "var(--tw-card-border)",
        paddingInlineStart: "2rem",
        paddingInlineEnd: "2rem",
      },
      ".card-content": {
        flexGrow: 1,
        padding: "2rem",
      },
      ".card-description": {
        fontSize: theme("fontSize.2sm"),
        color: theme("colors.muted.foreground"),
      },
      ".card-footer": {
        display: "flex",
        alignItems: "center",
        minHeight: "5.6rem",
        paddingInlineStart: "2rem",
        paddingInlineEnd: "2rem",
      },
      ".card-table": {
        display: "grid",
        flexGrow: 1,
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
    },
  });

  //Default
  addComponents({
    ".card": {
      boxShadow: "var(--tw-card-box-shadow)",
      border: "1px solid var(--border)",
      backgroundColor: theme("colors.card.DEFAULT"),
      ".card-header": {
        borderBottom: "1px solid var(--border)",
      },
      ".card-footer": {
        borderTop: "1px solid var(--border)",
      },
    },
  });

  // Accent
  addComponents({
    ".card.card-accent": {
      boxShadow: "var(--tw-card-box-shadow)",
      backgroundColor: theme("colors.muted.DEFAULT"),
      padding: "0.4rem",
      ".card-content": {
        backgroundColor: theme("colors.muted.DEFAULT"),
        borderTopLeftRadius: "1.2rem",
        borderTopRightRadius: "1.2rem",
        "&:last-child": {
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
        },
      },
      ".card-table": {
        backgroundColor: theme("colors.muted.DEFAULT"),
        borderRadius: theme("custom.components.common.borderRadius.card"),
      },
      ".card-footer": {
        backgroundColor: theme("colors.muted.DEFAULT"),
        borderBottomLeftRadius: "1.2rem",
        borderBottomRightRadius: "1.2rem",
        marginTop: "2px",
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
