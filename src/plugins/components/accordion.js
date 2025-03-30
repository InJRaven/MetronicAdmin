import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".accordion": {
      display: "flex",
      flexDirection: "column",

      '.active': {
        '.accordion-content': {
          display: 'block',
          transition: 'height 300ms ease',
        }
      }
    },
    ".accordion-item": {
      display: "flex",
      flexDirection: "column",
      "&:not(:last-child)": {
        borderBottomWidth: "1px",
        borderBottomColor: "var(--tw-gray-200)",
      },
    },
    ".accordion-toggle": {
      display: "flex",
      flexGrow: "1",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.6rem 0",
      span: {
        fontSize: theme("fontSize.base"),
        lineHeight: theme("fontSize.base.1.lineHeight"),
        color: "var(--tw-gray-900)",
        fontWeight: theme("fontWeight.medium"),
      },
    },
    ".accordion-content": {
      overflow: "hidden",
      transition: "height 300ms ease",
    },



  });
});
