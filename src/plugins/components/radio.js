import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    '.radio[type="radio"]': {
      flexShrink: "0",
      appearance: "none",
      boxShadow: "none",
      borderRadius: "50%",
      height: theme("custom.components.radio.DEFAULT.size"),
      width: theme("custom.components.radio.DEFAULT.size"),
      border: "1px solid var(--tw-gray-300)",
      backgroundColor: "var(--tw-light-light)",
      ".dark &": {
        backgroundColor: "var(--tw-coal-500)",
      },
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",

      '&:checked, &[aria-checked="true"]': {
        backgroundColor: "var(--tw-primary)",
        border: "1px solid var(--tw-primary)",
        backgroundImage: `url("${svgToDataUri(
          '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="10.9995" cy="11" r="5.86667" fill="white"/></svg>'
        )}")`,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: "none",
      },
      "&:focus": {
        borderColor: "var(--tw-primary)",
        boxShadow: "var(--tw-input-focus-box-shadow)",
        color: "var(--tw-gray-700)",
        "&::placeholder": {
          color: "var(--tw-gray-600)",
        },
      },
      "&:active": {
        color: "var(--tw-gray-700)",
        "&::placeholder": {
          color: "var(--tw-gray-600)",
        },
        boxShadow: "none",
      },
      "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: "var(--tw-gray-200)",
        border: "1px solid var(--tw-gray-300)",
        '&:checked, &[aria-checked="true"]': {
          backgroundColor: "var(--tw-primary-clarity)",
          border: "0",
        },
      },
    },
    '.radio-sm[type="radio"]': {
      height: theme("custom.components.radio.sm.size"),
      width: theme("custom.components.radio.sm.size"),
      '&:checked, &[aria-checked="true"]': {
        backgroundImage: `url("${svgToDataUri(
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9.0002" cy="8.99995" r="4.8" fill="white"/></svg>'
        )}")`,
      },
    },
    '.radio-lg[type="radio"]': {
      height: theme("custom.components.radio.lg.size"),
      width: theme("custom.components.radio.lg.size"),
      '&:checked, &[aria-checked="true"]': {
        backgroundImage: `url("${svgToDataUri(
          '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="12.9997" cy="13" r="6.93333" fill="white"/></svg>'
        )}")`,
      },
    },
  });

  // Group & labels
  addComponents({
    ".radio-group": {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
    },
    ".radio-label": {
      color: "var(--tw-gray-800)",
      fontWeight: theme("fontWeight.medium"),
      fontSize: theme("fontSize.2sm"),
      lineHeight: theme("fontSize.2sm.1.lineHeight"),
    },
    ".radio-label-lg": {
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
    },
  });
});
