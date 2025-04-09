import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents }) => {
  addComponents({
    ".image-input": {
      display: "inline-flex",
      position: "relative",
      alignItems: "stretch",
      justifyContent: "center",
      'input[type="file"]': {
        appearance: "none",
        position: "absolute",
        width: "0 !important",
        height: "0 !important",
        overflow: "hidden",
        opacity: "0",
      },
      ".button-remove-image": {
        position: "absolute",
        width: "2rem",
        height: "2rem",
        zIndex: 1,
        top: "0",
        right: "0",
        borderRadius: "9999px",
      },
      ".image-input-preview": {
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
      ".image-input-placeholder": {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
    },
  });
});
