import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".scrollable, .scrollable-y, .scrollable-x, .scrollable-hover, .scrollable-y-hover, .scrollable-x-hover, .scrollable-auto, .scrollable-y-auto, .scrollable-x-auto":
      {
        position: "relative",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",
        "&::-webkit-scrollbar": {
          width: "0.5rem",
          height: "0.5rem",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "2rem",
        },
        "&::-webkit-scrollbar-corner": {
          backgroundColor: "transparent",
        },
      },
    ".scrollable, .scrollable-hover": {
      overflow: "scroll",
    },
    ".scrollable-y, .scrollable-y-hover": {
      "overflow-y": "scroll",
    },
    ".scrollable-x, .scrollable-x-hover": {
      "overflow-x": "scroll",
    },
    ".scrollable-auto": {
      overflow: "auto",
    },
    ".scrollable-y-auto": {
      "overflow-y": "auto",
    },
    ".scrollable-x-auto": {
      "overflow-x": "auto",
    },

    ".scrollable, .scrollable-y, .scrollable-x, .scrollable-auto, .scrollable-y-auto, .scrollable-x-auto, .scrollable-hover:hover, .scrollable-y-hover:hover, .scrollable-x-hover:hover":
      {
        scrollbarColor:
          "var(--tw-scrollbar-thumb-color, var(--tw-gray-200)) transparent",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            "var(--tw-scrollbar-thumb-color, var(--tw-gray-200))",
        },
        "&::-webkit-scrollbar-corner": {
          backgroundColor: "transparent",
        },
      },
    [`@media (max-width: ${theme("screens.lg")})`]: {
      ".scrollable, .scrollable-hover": {
        overflow: "auto",
      },
      ".scrollable-y, .scrollable-y-hover": {
        "overflow-y": "auto",
      },
      ".scrollable-x, .scrollable-x-hover": {
        "overflow-x": "auto",
      },
    },
  });
});
