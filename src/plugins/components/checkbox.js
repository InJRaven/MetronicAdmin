import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";
export default plugin(({ addComponents, theme }) => {
  //Radix Checkbox
  addComponents({
    ".checkbox": {
      "--tw-ring-offset-color": "var(--background)",
      flexShrink: "0",
      appearance: "none",
      boxShadow: "none",
      backgroundColor: theme("colors.background"),
      borderWidth: "1px",
      borderColor: theme("colors.input"),
      borderRadius: theme("custom.components.checkbox.DEFAULT.borderRadius"),
      "&:focus-visible": {
        outline: "none",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      '&[aria-invalid="true"]': {
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",
      },
      '[data-invalid="true"] &': {
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 10%, transparent)",
        borderColor: "color-mix(in oklab, var(--destructive) 60%, transparent)",
      },

      '.dark &[aria-invalid="true"]': {
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 20%, transparent)",
        borderColor: theme("colors.destructive.DEFAULT"),
      },

      '.dark [data-invalid="true"] &': {
        "--tw-ring-color":
          "color-mix(in oklab, var(--destructive) 20%, transparent)",
        borderColor: theme("colors.destructive.DEFAULT"),
      },

      ".checkbox-indicator": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "currentColor",
      },
    },
  });

  // Size
  addComponents({
    ".checkbox-md": {
      height: "2rem",
      width: "2rem",
      svg: {
        height: "1.4rem",
        width: "1.4rem",
      },
      i: {
        fontSize: theme("fontSize.sm"),
      },
    },
    ".checkbox-sm": {
      height: "1.8rem",
      width: "1.8rem",
      svg: {
        height: "1.2rem",
        width: "1.2rem",
      },
      i: {
        fontSize: theme("fontSize.xs"),
      },
    },
    ".checkbox-lg": {
      height: "2.2rem",
      width: "2.2rem",
      svg: {
        height: "1.6rem",
        width: "1.6rem",
      },
      i: {
        fontSize: theme("fontSize.base"),
      },
    },
  });

  //Variants
  addComponents({
    ".checkbox-primary": {
      '&[data-state="checked"]': {
        backgroundColor: theme("color-mixcolors.primary.DEFAULT"),
        borderColor: theme("colors.primary.DEFAULT"),
        color: theme("colors.primary.foreground"),
      },
      '&[data-state="indeterminate"]': {
        backgroundColor: theme("colors.primary.DEFAULT"),
        borderColor: theme("colors.primary.DEFAULT"),
        color: theme("colors.primary.foreground"),
      },
    },
    ".checkbox-mono": {
      '&[data-state="checked"]': {
        backgroundColor: theme("colors.mono.DEFAULT"),
        borderColor: theme("colors.mono.DEFAULT"),
        color: theme("colors.mono.foreground"),
      },
      '&[data-state="indeterminate"]': {
        backgroundColor: theme("colors.mono.DEFAULT"),
        borderColor: theme("colors.mono.DEFAULT"),
        color: theme("colors.mono.foreground"),
      },
    },
  });

  // Group & labels
  addComponents({
    ".checkbox-group": {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
    },
    ".checkbox-label": {
      color: "var(--tw-gray-800)",
      fontWeight: theme("fontWeight.medium"),
      fontSize: theme("fontSize.2sm"),
      lineHeight: theme("fontSize.2sm.1.lineHeight"),
    },
    ".checkbox-label-lg": {
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("fontSize.sm.1.lineHeight"),
    },
  });
});
