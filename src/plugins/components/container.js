import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".container-fixed": {
      flexGrow: "1",
      width: "100%",
      paddingInlineStart: theme("custom.components.container.fixed.px.DEFAULT"),
      paddingInlineEnd: theme("custom.components.container.fixed.px.DEFAULT"),
    },
    [`@media (min-width: ${theme("screens.xl")})`]: {
      ".container-fixed": {
        paddingInlineStart: theme("custom.components.container.fixed.px.xl"),
        paddingInlineEnd: theme("custom.components.container.fixed.px.xl"), // Logical property for LTR/RTL
        maxWidth: theme("custom.components.container.fixed")["max-width"],
      },
    },
  });
  addComponents({
    ".container-fluid": {
      width: "100%",
      flexGrow: "1",
      paddingInlineStart: theme("custom.components.container.fluid.px.DEFAULT"),
      marginInlineEnd: theme("custom.components.container.fluid.px.DEFAULT"),
    },
    [`@media (min-width: ${theme("screens.xl")})`]: {
      ".container-fluid": {
        paddingInlineStart: theme("custom.components.container.fluid.px.xl"),
        marginInlineEnd: theme("custom.components.container.fluid.px.xl"), // Logical property for LTR/RTL
      },
    },
  });
});
