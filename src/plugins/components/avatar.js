import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".avatar": {
      position: "relative",
      display: "flex",
      flexShrink: "0",
      overflow: "hidden",
      borderRadius: "9999px",
      height: "6.4rem",
      width: "6.4rem",
      "&.avatar-xs": { height: "4rem", width: "4rem" },
      "&.avatar-sm": { height: "5.6rem", width: "5.6rem" },
      "&.avatar-lg": { height: "8rem", width: "8rem" },
      "&.avatar-xl": { height: "9.6rem", width: "9.6rem" },

      ".avatar-img": {
        aspecRatio: "1/1",
        height: "100%",
        width: "100%",
      },

      ".avatar-fallback": {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyItems: "center",
        borderRadiux: "9999px",
        backgroundColor: "hsl(var(--muted))",
      },
    },
  });
});
