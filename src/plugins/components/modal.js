import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".modal": {
      width: "100%",
      display: "none",
      position: "fixed",
      overflow: "auto",
      inset: "0",
      padding: "2rem",
    },

    ".modal-content": {
      position: "relative",
      borderRadius: theme("custom.components.common.borderRadius.modal"),
      boxShadow: "var(--tw-modal-box-shadow)",
      backgroundColor: "var(--tw-modal-background-color)",
      display: "flex",
      flexDirection: "column",
      outline: "none",
    },

    ".modal-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid var(--tw-gray-200)",
      paddingInlineStart: "2rem",
      paddingInlineEnd: "2rem",
      paddingBlockStart: "1rem",
      paddingBlockEnd: "1rem",
    },
    ".modal-title": {
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
      fontWeight: theme("fontWeight.semibold"),
      color: "var(--tw-gray-900)",
    },
    ".modal-body": {
      paddingInlineStart: "2rem",
      paddingInlineEnd: "2rem",
      paddingBlockStart: "1rem",
      paddingBlockEnd: "1rem",
      outline: "none",
    },

    ".modal-footer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid var(--tw-gray-200)",
      paddingInlineStart: "2rem",
      paddingInlineEnd: "2rem",
      paddingBlockStart: "1rem",
      paddingBlockEnd: "1rem",
    },

    // ".modal-backdrop": {
    //   position: "fixed",
    //   inset: 0,
    //   // opacity: "0.5",
    //   backgroundColor: "var(--tw-backdrop-background-color)",
    // },
  });

  // Utilities
  addComponents({
    ".modal-dialog": {
      inset: "auto",
    },
    ".modal-overlay": {
      inset: "0",
      height: "100%",
    },
    ".modal-center": {
      left: "50%",
      top: "50%",
      marginLeft: "0",
      marginRight: "0",
      transform: "translate(-50%, -50%)",
    },
    ".modal-center-y": {
      top: "50%",
      transform: "translateY(-50%)",
    },
    ".modal-center-x": {
      insetInlineStart: "50%",
      transform: "translateX(-50%)",
    },
    ".modal-rounded-t": {
      borderStartStartRadius: theme(
        "custom.components.common.borderRadius.modal"
      ),
      borderStartEndRadius: theme(
        "custom.components.common.borderRadius.modal"
      ),
    },
    ".modal-rounded-b": {
      borderEndStartRadius: theme(
        "custom.components.common.borderRadius.modal"
      ),
      borderEndEndRadius: theme("custom.components.common.borderRadius.modal"),
    },
  });
});
