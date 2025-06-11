module.exports = {
  content: ["index.html", "./src/**/*.{html,js,ts,tsx,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      base: {
        colors: {
          gray: {
            light: {
              100: "#F9F9F9",
              200: "#F1F1F4",
              300: "#DBDFE9",
              400: "#C4CADA",
              500: "#99A1B7",
              600: "#78829D",
              700: "#4B5675",
              800: "#252F4A",
              900: "#071437",
            },
            dark: {
              100: "#1B1C22",
              200: "#26272F",
              300: "#363843",
              400: "#464852",
              500: "#636674",
              600: "#808290",
              700: "#9A9CAE",
              800: "#B5B7C8",
              900: "#F5F5F5",
            },
          },
          contextual: {
            light: {
              brand: {
                default: "var(--color-orange-500)",
                active: "var(--color-orange-600)",
                border: "var(--color-orange-200)",
                light: "var(--color-orange-100)",
                clarity:
                  "color-mix(in oklch, var(--color-orange-500) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-orange-50)",
              },
              primary: {
                default: "var(--color-blue-500)",
                active: "var(--color-blue-600)",
                border: "var(--color-blue-200)",
                light: "var(--color-blue-100)",
                clarity:
                  "color-mix(in oklch, var(--color-blue-500) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-blue-50)",
              },
              success: {
                default: "var(--color-green-500)",
                active: "var(--color-green-600)",
                border: "var(--color-green-200)",
                light: "var(--color-green-100)",
                clarity:
                  "color-mix(in oklch, var(--color-green-500) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-green-50)",
              },
              info: {
                default: "var(--color-violet-500)",
                active: "var(--color-violet-600)",
                border: "var(--color-violet-200)",
                light: "var(--color-violet-100)",
                clarity:
                  "color-mix(in oklch, var(--color-violet-500) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-violet-50)",
              },
              danger: {
                default: "var(--color-red-500)",
                active: "var(--color-red-600)",
                border: "var(--color-red-200)",
                light: "var(--color-red-100)",
                clarity:
                  "color-mix(in oklch, var(--color-red-500) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-red-50)",
              },
              warning: {
                default: "var(--color-yellow-500)",
                active: "var(--color-yellow-600)",
                border: "var(--color-yellow-200)",
                light: "var(--color-yellow-100)",
                clarity:
                  "color-mix(in oklch, var(--color-yellow-500) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-yellow-50)",
              },
              dark: {
                default: "var(--color-gray-800)",
                active: "var(--color-gray-950)",
                border: "var(--color-gray-200)",
                light: "var(--color-gray-100)",
                clarity:
                  "color-mix(in oklch, var(--color-gray-800) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-gray-50)",
              },
              light: {
                default: "var(--color-white)",
                active: "var(--color-gray-50)",
                border: "var(--color-gray-200)",
                light: "var(--color-white)",
                clarity:
                  "color-mix(in oklch, var(--color-white) 20%, transparent)",
                inverse: "var(--color-gray-700)",
                surface: "var(--color-white)",
              },
              secondary: {
                default: "var(--color-gray-100)",
                active: "var(--color-gray-200)",
                border: "var(--color-gray-200)",
                light: "var(--color-gray-100)",
                clarity:
                  "color-mix(in oklch, var(--color-gray-100) 20%, transparent)",
                inverse: "var(--color-gray-700)",
                surface: "var(--color-gray-50)",
              },
            },
            dark: {
              brand: {
                default: "var(--color-orange-600)",
                active: "var(--color-orange-500)",
                border: "var(--color-orange-200)",
                light: "var(--color-orange-950)",
                clarity:
                  "color-mix(in oklch, var(--color-orange-600) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-orange-950)",
              },
              primary: {
                default: "var(--color-blue-600)",
                active: "var(--color-blue-500)",
                border: "var(--color-blue-200)",
                light: "var(--color-blue-950)",
                clarity:
                  "color-mix(in oklch, var(--color-blue-600) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-blue-950)",
              },
              success: {
                default: "var(--color-green-600)",
                active: "var(--color-green-500)",
                border: "var(--color-green-200)",
                light: "var(--color-green-950)",
                clarity:
                  "color-mix(in oklch, var(--color-green-600) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-green-950)",
              },
              info: {
                default: "var(--color-violet-600)",
                active: "var(--color-violet-500)",
                border: "var(--color-violet-200)",
                light: "var(--color-violet-950)",
                clarity:
                  "color-mix(in oklch, var(--color-violet-600) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-violet-950)",
              },
              danger: {
                default: "var(--color-red-600)",
                active: "var(--color-red-500)",
                border: "var(--color-red-200)",
                light: "var(--color-red-950)",
                clarity:
                  "color-mix(in oklch, var(--color-red-600) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-red-950)",
              },
              warning: {
                default: "var(--color-yellow-600)",
                active: "var(--color-yellow-500)",
                border: "var(--color-yellow-200)",
                light: "var(--color-yellow-950)",
                clarity:
                  "color-mix(in oklch, var(--color-yellow-600) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-yellow-950)",
              },
              dark: {
                default: "var(--color-gray-800)",
                active: "var(--color-gray-700)",
                border: "var(--color-gray-200)",
                light: "var(--color-gray-950)",
                clarity:
                  "color-mix(in oklch, var(--color-gray-800) 20%, transparent)",
                inverse: "#ffffff",
                surface: "var(--color-gray-950)",
              },
              light: {
                default: "var(--color-gray-200)",
                active: "var(--color-gray-100)",
                border: "var(--color-gray-200)",
                light: "var(--color-white)",
                clarity:
                  "color-mix(in oklch, var(--color-gray-200) 20%, transparent)",
                inverse: "var(--color-gray-700)",
                surface: "var(--color-white)",
              },
              secondary: {
                default: "var(--color-gray-300)",
                active: "var(--color-gray-200)",
                border: "var(--color-gray-200)",
                light: "var(--color-gray-950)",
                clarity:
                  "color-mix(in oklch, var(--color-gray-300) 20%, transparent)",
                inverse: "var(--color-gray-500)",
                surface: "var(--color-gray-950)",
              },
            },
          },
        },
        boxShadows: {
          light: {
            default: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)",
            light: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
            primary: "0px 4px 12px 0px rgba(40, 132, 239, 0.35)",
            success: "0px 4px 12px 0px rgba(53, 189, 100, 0.35)",
            danger: "0px 4px 12px 0px rgba(241, 65, 108, 0.35)",
            info: "0px 4px 12px 0px rgba(114, 57, 234, 0.35)",
            warning: "0px 4px 12px 0px rgba(246, 192, 0, 0.35)",
            dark: "0px 4px 12px 0px rgba(37, 47, 74, 0.35)",
          },
          dark: {
            default: "none",
            light: "none",
            primary: "none",
            success: "none",
            danger: "none",
            info: "none",
            warning: "none",
            dark: "none",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        museo: ["Museo Sans Display", "sans-serif"],
        "museo-extra": ["Museo Sans Display ExtraBlack", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mono: {
          DEFAULT: "var(--mono)",
          foreground: "var(--mono-foreground)",
        },

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        // chart: {
        //   1: "hsl(var(--chart-1))",
        //   2: "hsl(var(--chart-2))",
        //   3: "hsl(var(--chart-3))",
        //   4: "hsl(var(--chart-4))",
        //   5: "hsl(var(--chart-5))",
        // },
        //end
        gray: {
          100: "var(--tw-gray-100)",
          200: "var(--tw-gray-200)",
          300: "var(--tw-gray-300)",
          400: "var(--tw-gray-400)",
          500: "var(--tw-gray-500)",
          600: "var(--tw-gray-600)",
          700: "var(--tw-gray-700)",
          800: "var(--tw-gray-800)",
          900: "var(--tw-gray-900)",
        },
        primary: {
          DEFAULT: "var(--tw-primary)",
          active: "var(--tw-primary-active)",
          light: "var(--tw-primary-light)",
          border: "var(--tw-primary-border)",
          surface: "var(--tw-primary-surface)",
          clarity: "var(--tw-primary-clarity)",
          inverse: "var(--tw-primary-inverse)",
          foreground: "var(--primary-foreground)",
        },
        success: {
          DEFAULT: "var(--tw-success)",
          active: "var(--tw-success-active)",
          light: "var(--tw-success-light)",
          border: "var(--tw-success-border)",
          surface: "var(--tw-success-surface)",
          clarity: "var(--tw-success-clarity)",
          inverse: "var(--tw-success-inverse)",
          foreground: "#fff",
        },
        warning: {
          DEFAULT: "var(--tw-warning)",
          active: "var(--tw-warning-active)",
          light: "var(--tw-warning-light)",
          border: "var(--tw-warning-border)",
          surface: "var(--tw-warning-surface)",
          clarity: "var(--tw-warning-clarity)",
          inverse: "var(--tw-warning-inverse)",
          foreground: "#fff",
        },
        danger: {
          DEFAULT: "var(--tw-danger)",
          active: "var(--tw-danger-active)",
          light: "var(--tw-danger-light)",
          border: "var(--tw-danger-border)",
          surface: "var(--tw-danger-surface)",
          clarity: "var(--tw-danger-clarity)",
          inverse: "var(--tw-danger-inverse)",
        },
        info: {
          DEFAULT: "var(--tw-info)",
          active: "var(--tw-info-active)",
          light: "var(--tw-info-light)",
          border: "var(--tw-info-border)",
          surface: "var(--tw-info-surface)",
          clarity: "var(--tw-info-clarity)",
          inverse: "var(--tw-info-inverse)",
          foreground: "#fff",
        },
        dark: {
          DEFAULT: "var(--tw-dark)",
          active: "var(--tw-dark-active)",
          light: "var(--tw-dark-light)",
          border: "var(--tw-dark-border)",
          surface: "var(--tw-dark-surface)",
          clarity: "var(--tw-dark-clarity)",
          inverse: "var(--tw-dark-inverse)",
        },
        light: {
          DEFAULT: "var(--tw-light)",
          active: "var(--tw-light-active)",
          light: "var(--tw-light-light)",
          border: "var(--tw-light-border)",
          surface: "var(--tw-light-surface)",
          clarity: "var(--tw-light-clarity)",
          inverse: "var(--tw-light-inverse)",
        },
        secondary: {
          DEFAULT: "var(--tw-secondary)",
          active: "var(--tw-secondary-active)",
          light: "var(--tw-secondary-light)",
          border: "var(--tw-secondary-border)",
          surface: "var(--tw-secondary-surface)",
          clarity: "var(--tw-secondary-clarity)",
          inverse: "var(--tw-secondary-inverse)",
          foreground: "var(--secondary-foreground)",
        },
        brand: {
          DEFAULT: "var(--tw-brand)",
          active: "var(--tw-brand-active)",
          light: "var(--tw-brand-light)",
          border: "var(--tw-brand-border)",
          surface: "var(--tw-brand-surface)",
          clarity: "var(--tw-brand-clarity)",
          inverse: "var(--tw-brand-inverse)",
        },

        coal: {
          100: "#15171C",
          200: "#13141A",
          300: "#111217",
          400: "#0F1014",
          500: "#0D0E12",
          600: "#0B0C10",
          black: "#000000",
          clarity: "rgba(24, 25, 31, 0.50)",
        },
      },
      boxShadow: {
        card: "var(--tw-card-box-shadow)",
        default: "var(--tw-default-box-shadow)",
        light: "var(--tw-light-box-shadow)",
        primary: "var(--tw-primary-box-shadow)",
        success: "var(--tw-success-box-shadow)",
        danger: "var(--tw-danger-box-shadow)",
        info: "var(--tw-info-box-shadow)",
        warning: "var(--tw-warning-box-shadow)",
        dark: "var(--tw-dark-box-shadow)",
      },
      borderRadius: {
        sm: "0.2rem",
        DEFAULT: "0.4rem",
        md: "0.6rem",
        lg: "0.8rem",
        xl: " 1.2rem",
      },
      fontSize: {
        "4xs": [
          "0.9", // 9px
          {
            lineHeight: "1.1rem", // 11px
          },
        ],
        "3xs": [
          "1rem", // 10px
          {
            lineHeight: "1.2rem", // 12px
          },
        ],
        "2xs": [
          "1.1rem", // 11px
          {
            lineHeight: "1.2rem", // 12px
          },
        ],
        xs: [
          "1.2rem",
          {
            lineHeight: "1.2rem", // 12px
          },
        ],
        "2sm": [
          "1.3rem", // 13px
          {
            lineHeight: "1.8rem", // 18px
          },
        ],
        sm: ["1.4rem", { lineHeight: "2rem" }],
        md: [
          "1.5rem", // 15px
          {
            lineHeight: "2.2rem", // 22px
          },
        ],
        base: [
          "1.6rem",
          {
            lineHeight: "2.4rem", // 22px
          },
        ],
        lg: ["1.8rem", { lineHeight: "2.8rem" }],
        xl: ["2rem", { lineHeight: "2.8rem" }],

        "1.5xl": [
          "2.2rem", // 22px
          {
            lineHeight: "2.9rem", // 29px
          },
        ],
        "2.5xl": [
          "2.6rem", // 26px
          {
            lineHeight: "3.4rem", // 34px
          },
        ],
      },
      lineHeight: {
        0: "0", // 0px
        5.5: "2.2rem", // 22px
      },
      zIndex: {
        1: "1",
        5: "5",
        15: "15",
        25: "25",
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        0.75: "0.3rem", // 3px
        1.25: "0.5rem", // 5px
        1.75: "0.7rem", // 7px
        2.25: "0.9rem", // 9px
        2.75: "0.11rem", // 11px
        4.5: "1.8rem", // 18px
        5.5: "2.2rem", // 22px
        6.5: "2.6rem", // 26px
        7.5: "3rem", // 30px
        12.5: "4rem", // 40px
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      //begin: Shadcn UI Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
      //end
    },

    custom: ({ theme }) => ({
      components: {
        common: {
          backgrounds: {
            light: {
              card: "white",
              tooltip: theme("colors.coal")["400"],
              popover: "white",
              modal: "white",
              drawer: "white",
              dropdown: "white",
              backdrop: "rgba(0, 0, 0, 0.80)",
              tableHead: "var(--tw-light-active)",
            },
            dark: {
              card: theme("colors.coal")["300"],
              tooltip: theme("colors.coal")["600"],
              popover: theme("colors.coal")["600"],
              modal: theme("colors.coal")["600"],
              drawer: theme("colors.coal")["600"],
              dropdown: theme("colors.coal")["600"],
              backdrop: "rgba(0, 0, 0, 0.80)",
              tableHead: theme("colors.coal")["200"],
            },
          },
          borders: {
            light: {
              card: "1px solid var(--tw-gray-200)",
              table: "1px solid var(--tw-gray-200)",
              dropdown: "1px solid var(--tw-gray-200)",
              popover: "1px solid var(--tw-gray-200)",
              tooltip: "0",
            },
            dark: {
              card: `1px solid ${theme("base.colors.gray.dark")["100"]}`,
              table: `1px solid ${theme("base.colors.gray.dark")["100"]}`,
              dropdown: `1px solid ${theme("base.colors.gray.dark")["100"]}`,
              tooltip: `1px solid ${theme("base.colors.gray.dark")["100"]}`,
              popover: `1px solid ${theme("base.colors.gray.dark")["100"]}`,
            },
          },
          boxShadows: {
            light: {
              card: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              tooltip: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              popover: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              modal: "0px 10px 14px 0px rgba(15, 42, 81, 0.03)",
              drawer: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              dropdown: "0px 7px 18px 0px rgba(0, 0, 0, 0.09)",
              input: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
            },
            dark: {
              card: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              tooltip: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              popover: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              modal: "0px 10px 14px 0px rgba(15, 42, 81, 0.03)",
              drawer: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
              dropdown: "0px 7px 18px 0px rgba(0, 0, 0, 0.09)",
              input: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
            },
          },
          borderRadius: {
            btn: theme("borderRadius.md"),
            progress: theme("borderRadius.lg"),
            dropdown: theme("borderRadius.xl"),
            badge: theme("borderRadius.DEFAULT"),
            card: theme("borderRadius.xl"),
            tooltip: theme("borderRadius.lg"),
            popover: theme("borderRadius.lg"),
            modal: theme("borderRadius.xl"),
          },
        },
        container: {
          fixed: {
            px: {
              DEFAULT: theme("spacing")["6"],
              xl: theme("spacing")["7.5"],
            },
            "max-width": theme("screens.xl"),
          },
          fluid: {
            px: {
              DEFAULT: theme("spacing")["6"],
              xl: theme("spacing")["7.5"],
            },
          },
        },
        btn: {
          xs: {
            height: "2.8rem",
            px: "0.8rem",
            py: "0.56rem",
            gap: "0.4rem",
            fontSize: theme("fontSize.2xs")[0],
            fontWeight: "500",
            iconFontSize: "1.2rem",
            onlyIconFontSize: "1.6rem",
          },
          sm: {
            height: "3.2rem",
            px: "1.2rem",
            py: "0.72rem",
            gap: "0.44rem",
            fontSize: theme("fontSize.xs")[0],
            fontWeight: "500",
            iconFontSize: "1.4rem",
            onlyIconFontSize: "1.8rem",
            tabsGap: "0.3rem",
          },
          DEFAULT: {
            height: "4rem",
            px: "1.6rem",
            py: "0.88rem",
            gap: "0.6rem",
            fontSize: theme("fontSize.2sm")[0],
            fontWeight: "500",
            iconFontSize: "1.8rem",
            onlyIconFontSize: "2.4rem",
            tabsGap: "0.4rem",
          },
          lg: {
            height: "4.8rem",
            px: "2rem",
            py: "1.2rem",
            gap: "0.8rem",
            fontSize: theme("fontSize.sm")[0],
            fontWeight: "500",
            iconFontSize: "2rem",
            onlyIconFontSize: "2.8rem",
            tabsGap: "0.5rem",
          },
        },
        input: {
          sm: {
            px: "1rem",
          },
          DEFAULT: {
            px: "1.2rem",
          },
          lg: {
            px: "1.4rem",
          },
        },
        checkbox: {
          sm: {
            size: "1.8rem",
            borderRadius: "0.4rem",
          },
          DEFAULT: {
            size: "2.2rem",
            borderRadius: "0.6rem",
          },
          lg: {
            size: "2.6rem",
            borderRadius: "0.8rem",
          },
        },
        radio: {
          sm: {
            size: "1.8rem",
          },
          DEFAULT: {
            size: "2.2rem",
          },
          lg: {
            size: "2.6rem",
          },
        },
        switch: {
          sm: {
            height: "1.8rem",
            width: "3rem",
          },
          DEFAULT: {
            height: "2.2rem",
            width: "3.4rem",
          },
          lg: {
            height: "2.6rem",
            width: "3.8rem",
          },
        },
        card: {
          px: theme("spacing")["7.5"],
          py: {
            header: theme("spacing.3"),
            body: theme("spacing.5"),
            footer: theme("spacing.3"),
            group: theme("spacing.3"),
          },
          grid: {
            px: theme("spacing.5"),
          },
        },
        table: {
          px: {
            xs: "0.8rem",
            sm: "1.2rem",
            DEFAULT: "1.6rem",
            lg: "2rem",
          },
          py: {
            xs: {
              head: "0.36rem",
              body: "0.56rem",
            },
            sm: {
              head: "0.68rem",
              body: "0.8rem",
            },
            DEFAULT: {
              head: "1rem",
              body: "1.2rem",
            },
            lg: {
              head: "1.32rem",
              body: "1.52rem",
            },
          },
        },
      },
      layouts: {
        sidebar: {
          width: {
            desktop: "280px",
            desktopCollapse: "80px",
            mobile: "280px",
          },
        },
        header: {
          height: {
            desktop: "70px",
            mobile: "60px",
          },
        },
      },
    }),
  },
  plugins: [
    require("tailwindcss-animate"),
    // require('./src/plugins/plugin'),
    require("./src/plugins/core"),
    // require('./src/plugins/components/breakpoints'),
    // require('./src/plugins/components/typography'),
    require("./src/plugins/components/menu"),
    require("./src/plugins/components/tree-view"),
    require("./src/plugins/components/avatar"),
    require("./src/plugins/components/alert"),

    require("./src/plugins/components/accordion"),
    require("./src/plugins/components/input"),
    // require('./src/plugins/components/input-group'),
    require("./src/plugins/components/select"),
    require("./src/plugins/components/textarea"),
    require("./src/plugins/components/file-input"),
    require("./src/plugins/components/switch"),
    require("./src/plugins/components/checkbox"),
    require("./src/plugins/components/radio"),
    require("./src/plugins/components/range"),
    require("./src/plugins/components/container"),
    require("./src/plugins/components/image-input"),
    require("./src/plugins/components/modal"),
    // require('./src/plugins/components/drawer'),
    require("./src/plugins/components/toast"),
    require("./src/plugins/components/tooltip"),
    // require('./src/plugins/components/popover'),
    require("./src/plugins/components/button"),
    require("./src/plugins/components/calendar"),
    // require('./src/plugins/components/btn-group'),
    // require('./src/plugins/components/tabs'),
    require("./src/plugins/components/data-table"),
    // require('./src/plugins/components/pagination'),
    require("./src/plugins/components/card"),
    require("./src/plugins/components/dialog"),
    require("./src/plugins/components/table"),
    require("./src/plugins/components/badge"),
    // require('./src/plugins/components/rating'),
    require("./src/plugins/components/scrollable"),
    require("./src/plugins/components/progress"),
    // require('./src/plugins/components/apexcharts'),
    // require('./src/plugins/components/leaflet')
  ],
};
