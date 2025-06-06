import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".accordion": {
      ".accordion-item": {
        borderBottom: "1px solid var(--border)",
      },
      ".accordion-content": {
        overflow: "hidden",
        fontSize: theme("fontSize.sm"),
        color: theme('colors.accent.foreground')
      },
      ".accordion-trigger": {
        display: "flex",
        flex: "1 1 0",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1.6rem 0",
        fontWeight: theme("fontWeight.medium"),
        color: theme('colors.foreground'),
      },
    },
  });

  // Outline
  addComponents({
    ".accordion.accordion-outline": {
      ".accordion-item": {
        border: "1px solid var(--border)",
        borderRadius: theme("borderRadius.lg"),
        paddingInlineStart: "1.6rem",
        paddingInlineEnd: "1.6rem",
      },
    },
  });
  //Solid
  addComponents({
    ".accordion.accordion-solid": {
      ".accordion-item": {
        borderRadius: theme("borderRadius.lg"),
        paddingInlineStart: "1.6rem",
        paddingInlineEnd: "1.6rem",
        backgroundColor: "var(--accent) / 0.7",
      },
    },
  });
});
