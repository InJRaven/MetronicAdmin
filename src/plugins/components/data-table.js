import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".data-table": {
      display: "grid",
      flexGrow: 1,
      ".data-table-wrapper": {
        position: "relative",
        width: "100%",
        borderWidth: "1px",
        borderRadius: "0.6rem",
      },
      ".data-table-loading": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",

        ".loading": {
          display: "flex",
          alignItems: "center",
          gap: theme("gap.2"),
          padding: "0.5rem 1rem",
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.medium"),
          lineHeight: 1,
          borderWidth: 1,
          boxShadow: theme("boxShadow.sm"),
          borderRadius: theme("borderRadius.md"),
          color: "hsl(var(--muted-foreground))",
          backgroundColor: "hsl(var(--card))",
        },
        svg: {
          width: theme("size.5"),
          height: theme("size.5"),
          marginLeft: `-${theme("margin.1")}`,
          color: "hsl(var(--muted-foreground))",
        },
      },

      table: {
        width: "100%",
        verticalAlign: "middle",
        textAlign: "left",
        captionSide: "bottom",
        fontSize: theme("fontSize.sm"),
        "thead tr": {
          borderBottomWidth: "1px",
          backgroundColor: "hsl(var(--muted) / 0.3)",
          th: {
            height: "3rem",
            textAlign: "left",
            verticalAlign: "middle",
            fontWeight: theme("fontWeight.medium"),
            color: "hsl(var(--muted-foreground))",
          },
        },
        "tbody tr": {
          borderBottomWidth: "1px",
          "&:hover": {
            backgroundColor: "hsl(var(--muted) / 0.3)",
          },

          td: {
            verticalAlign: "middle",
          },
        },
      },
    },
  });
});
