import plugin from "tailwindcss/plugin";
export default plugin(({ addComponents }) => {
  addComponents({
    ".range": {
      width: "100%",
      height: "0.8rem",
      padding: 0,
      appearance: "none",
      "&:focus": {
        outline: 0,
      },
      "&::-moz-focus-outer": {
        border: "0",
      },
      "&::-webkit-slider-thumb": {
        width: "2.6rem",
        height: "2.6rem",
        marginTop: "-0.9rem",
        boxShadow: "var(--tw-default-box-shadow)",
        appearance: "none",
        border: "1px solid var(--tw-gray-200)",
        transition:
          "background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out",
        borderRadius: "50%",
        backgroundColor: "var(--tw-light)",
        "&:active": {
          backgroundColor: "var(--tw-light)",
        },
      },
      "&::-moz-range-thumb": {
        width: "2.6rem",
        height: "2.6rem",
        marginTop: "-0.9rem",
        boxShadow: "var(--tw-default-box-shadow)",
        appearance: "none",
        border: "1px solid var(--tw-gray-200)",
        transition:
          "background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out",
        borderRadius: "50%",
        backgroundColor: "var(--tw-light)",
        "&:active": {
          backgroundColor: "var(--tw-light)",
        },
      },
      "&::-moz-range-track": {
        width: "100%",
        height: "0.8rem",
        color: "transparent",
        cursor: "pointer",
        background:
          "linear-gradient(to right,var(--tw-primary) var(--value, 0%),var(--tw-gray-200) var(--value, 0%))",

        borderColor: "transparent",
        borderRadius: "0.3rem",
      },
      "&::-webkit-slider-runnable-track": {
        width: "100%",
        height: "0.8rem",
        color: "transparent",
        cursor: "pointer",
        background:
          "linear-gradient(to right,var(--tw-primary) var(--value, 0%),var(--tw-gray-200) var(--value, 0%))",
        borderColor: "transparent",
        borderRadius: "0.3rem",
      },
      "&:disabled": {
        pointerEvents: "none",
        "&::-webkit-slider-thumb": {
          backgroundColor: "var(--tw-gray-100)",
        },
        "&::-moz-range-thumb": {
          backgroundColor: "var(--tw-gray-100)",
        },
      },
    },
  });
});
