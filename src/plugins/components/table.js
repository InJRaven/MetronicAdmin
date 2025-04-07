import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";
export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".table": {
      width: "100%",
      captionSide: "bottom",
      borderCollapse: "collapse",
      textAlign: "left",
      color: "var(--tw-gray-700)",
      verticalAlign: "middle",
      fontWeight: theme("fontWeight.medium"),
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
      "th, td": {
        'input[type="checkbox"]': {
          verticalAlign: "inherit",
        },
      },
      "thead, tfoot": {
        "td, th": {
          backgroundColor: "var(--tw-table-head-background-color)",
          color: "var(--tw-gray-600)",
          fontWeight: theme("fontWeight.medium"),
          fontSize: theme("fontSize.2sm"),
          lineHeight: theme("fontSize.2sm.1.lineHeight"),
          verticalAlign: "middle",
        },
      },
      thead: {
        "td, th": {
          borderBottom: "var(--tw-table-border)",
        },
      },
      tfoot: {
        "td, th": {
          borderTop: "var(--tw-table-border)",
        },
      },
      tbody: {
        verticalAlign: "inherit",
        tr: {
          "td, th": {
            borderBottom: "var(--tw-table-border)",
          },
          "&:last-child": {
            "td, th": {
              borderBottom: "0",
            },
          },
        },
      },
    },
    "[dir=rtl] .table": {
      textAlign: "right",
    },
  });

  //SIZE
  addComponents({
    ".table": {
      "thead, tfoot": {
        "td, th": {
          paddingInlineStart: theme("custom.components.table.px.DEFAULT"),
          paddingInlineEnd: theme("custom.components.table.px.DEFAULT"),
          paddingTop: theme("custom.components.table.py.DEFAULT.head"),
          paddingBottom: theme("custom.components.table.py.DEFAULT.head"),
        },
      },
      tbody: {
        tr: {
          "td, th": {
            paddingInlineStart: theme("custom.components.table.px.DEFAULT"),
            paddingInlineEnd: theme("custom.components.table.px.DEFAULT"),
            paddingTop: theme("custom.components.table.py.DEFAULT.body"),
            paddingBottom: theme("custom.components.table.py.DEFAULT.body"),
          },
        },
      },
    },
    ".table-xs": {
      "thead, tfoot": {
        "td, th": {
          paddingInlineStart: theme("custom.components.table.px.xs"),
          paddingInlineEnd: theme("custom.components.table.px.xs"),
          paddingTop: theme("custom.components.table.py.xs.head"),
          paddingBottom: theme("custom.components.table.py.xs.head"),
        },
      },
      tbody: {
        tr: {
          "td, th": {
            paddingInlineStart: theme("custom.components.table.px.xs"),
            paddingInlineEnd: theme("custom.components.table.px.xs"),
            paddingTop: theme("custom.components.table.py.xs.body"),
            paddingBottom: theme("custom.components.table.py.xs.body"),
          },
        },
      },
    },
    ".table-sm": {
      "thead, tfoot": {
        "td, th": {
          paddingInlineStart: theme("custom.components.table.px.sm"),
          paddingInlineEnd: theme("custom.components.table.px.sm"),
          paddingTop: theme("custom.components.table.py.sm.head"),
          paddingBottom: theme("custom.components.table.py.sm.head"),
        },
      },
      tbody: {
        tr: {
          "td, th": {
            paddingInlineStart: theme("custom.components.table.px.sm"),
            paddingInlineEnd: theme("custom.components.table.px.sm"),
            paddingTop: theme("custom.components.table.py.sm.body"),
            paddingBottom: theme("custom.components.table.py.sm.body"),
          },
        },
      },
    },
    ".table-lg": {
      "thead, tfoot": {
        "td, th": {
          paddingInlineStart: theme("custom.components.table.px.lg"),
          paddingInlineEnd: theme("custom.components.table.px.lg"),
          paddingTop: theme("custom.components.table.py.lg.head"),
          paddingBottom: theme("custom.components.table.py.lg.head"),
        },
      },
      tbody: {
        tr: {
          "td, th": {
            paddingInlineStart: theme("custom.components.table.px.lg"),
            paddingInlineEnd: theme("custom.components.table.px.lg"),
            paddingTop: theme("custom.components.table.py.lg.body"),
            paddingBottom: theme("custom.components.table.py.lg.body"),
          },
        },
      },
    },
  });

  // Border
  addComponents({
    ".table-border": {
      border: "var(--tw-table-border)",
      "td, th": {
        "border-right": "var(--tw-table-border)",
        "&:last-child": {
          borderRight: "0",
        },
      },
    },
    ".table-border-s": {
      borderInlineStart: "var(--tw-table-border)",
    },
    ".table-border-e": {
      borderInlineEnd: "var(--tw-table-border)",
    },
    ".table-border-t": {
      borderTop: "var(--tw-table-border)",
    },
    ".table-border-b": {
      borderBottom: "var(--tw-table-border)",
    },
  });

  // Sort
  addComponents({
    ".sort": {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
      cursor: "pointer",
      lineHeight: "1",
    },
    ".sort-icon": {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "1.4rem",
      width: "1.4rem",
      gap: "0.2rem",
      lineHeight: "1",
      "&:before": {
        display: "inline-block",
        content: '""',
        height: "0.4rem",
        width: "0.7rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center`,
        backgroundSize: "cover",
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1.08333 4.83333C0.908333 4.83333 0.791667 4.775 0.675 4.65833C0.441667 4.425 0.441667 4.075 0.675 3.84167L3.59167 0.925C3.825 0.691667 4.175 0.691667 4.40833 0.925L7.325 3.84167C7.55833 4.075 7.55833 4.425 7.325 4.65833C7.09167 4.89167 6.74167 4.89167 6.50833 4.65833L4 2.15L1.49167 4.65833C1.375 4.775 1.25833 4.83333 1.08333 4.83333Z" fill="${theme(
            "base.colors.gray.light.600"
          )}"/></svg>`
        )}")`,
      },

      "&:after": {
        display: "inline-block",
        content: '""',
        height: "0.4rem",
        width: "0.7rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center`,
        backgroundSize: "cover",
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4 4.24984C3.825 4.24984 3.70833 4.1915 3.59167 4.07484L0.675 1.15817C0.441667 0.924838 0.441667 0.574837 0.675 0.341504C0.908333 0.108171 1.25833 0.108171 1.49167 0.341504L4 2.84984L6.50833 0.341504C6.74167 0.108171 7.09167 0.108171 7.325 0.341504C7.55833 0.574837 7.55833 0.924838 7.325 1.15817L4.40833 4.07484C4.29167 4.1915 4.175 4.24984 4 4.24984Z" fill="${theme(
            "base.colors.gray.light.600"
          )}"/></svg>`
        )}")`,
      },
      ".asc > &": {
        "&:before": {
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1.08333 4.83333C0.908333 4.83333 0.791667 4.775 0.675 4.65833C0.441667 4.425 0.441667 4.075 0.675 3.84167L3.59167 0.925C3.825 0.691667 4.175 0.691667 4.40833 0.925L7.325 3.84167C7.55833 4.075 7.55833 4.425 7.325 4.65833C7.09167 4.89167 6.74167 4.89167 6.50833 4.65833L4 2.15L1.49167 4.65833C1.375 4.775 1.25833 4.83333 1.08333 4.83333Z" fill="${theme(
              "base.colors.gray.light.700"
            )}"/></svg>`
          )}")`,
        },
        "&:after": {
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4 4.24984C3.825 4.24984 3.70833 4.1915 3.59167 4.07484L0.675 1.15817C0.441667 0.924838 0.441667 0.574837 0.675 0.341504C0.908333 0.108171 1.25833 0.108171 1.49167 0.341504L4 2.84984L6.50833 0.341504C6.74167 0.108171 7.09167 0.108171 7.325 0.341504C7.55833 0.574837 7.55833 0.924838 7.325 1.15817L4.40833 4.07484C4.29167 4.1915 4.175 4.24984 4 4.24984Z" fill="${theme(
              "base.colors.gray.light.400"
            )}"/></svg>`
          )}")`,
        },
      },
      ".desc > &": {
        "&:before": {
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1.08333 4.83333C0.908333 4.83333 0.791667 4.775 0.675 4.65833C0.441667 4.425 0.441667 4.075 0.675 3.84167L3.59167 0.925C3.825 0.691667 4.175 0.691667 4.40833 0.925L7.325 3.84167C7.55833 4.075 7.55833 4.425 7.325 4.65833C7.09167 4.89167 6.74167 4.89167 6.50833 4.65833L4 2.15L1.49167 4.65833C1.375 4.775 1.25833 4.83333 1.08333 4.83333Z" fill="${theme(
              "base.colors.gray.light.400"
            )}"/></svg>`
          )}")`,
        },
        "&:after": {
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4 4.24984C3.825 4.24984 3.70833 4.1915 3.59167 4.07484L0.675 1.15817C0.441667 0.924838 0.441667 0.574837 0.675 0.341504C0.908333 0.108171 1.25833 0.108171 1.49167 0.341504L4 2.84984L6.50833 0.341504C6.74167 0.108171 7.09167 0.108171 7.325 0.341504C7.55833 0.574837 7.55833 0.924838 7.325 1.15817L4.40833 4.07484C4.29167 4.1915 4.175 4.24984 4 4.24984Z" fill="${theme(
              "base.colors.gray.light.700"
            )}"/></svg>`
          )}")`,
        },
      },
    },
    ".sort-label": {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
    },
  });
});
