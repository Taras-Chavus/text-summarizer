import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sidebarColor: "#14151A",
        sidebarHoverBtnColor: "#FFFFFF14",
        textSecondaryBtn: "#FFFFFF52",
        badgeColor: "#3368F04D",
        badgeBorderColor: "#383b7a",
        avatarColor: "#741DE2",
        textSecondaryColor: "#727374",
        summarizerContainerColor: "#0B0C0E",
        summarizedTextBlock: "#F7F7F8",
        borderBlock: "#0A0F2914",
        footerBorderBtn: "#E9EAEC",
        footerTextBtn: "#0A0F2940",
        mainBorder: "#DEE0E5",
        successColor: "#EBF7EE",
        successBorderColor: "#B5E1C0",
        successIconColor: "#3FBE61",
        destructiveIconColor: "#E6483D",
        destructiveColor: "#FCEDEA",
        destructiveBorderColor: "#F2BCB2",
        inputTextPlaceholder: "#0D112666",
        historyItemMenuIcon: "#0F132499",
        paginationBgBtn: "#0A0F290A",
        loginBg: "#F9FAFF",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        custom: "0px 1px 2px 0px #14151A0D",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    animate,
    function (api: PluginAPI) {
      const { addComponents } = api;

      addComponents({
        ".reset-textarea": {
          appearance: "none",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          padding: "0",
          margin: "0",
          outline: "none",
          resize: "none",
          fontSize: "inherit",
          fontFamily: "inherit",
          "&:focus": {
            border: "none !important",
            boxShadow: "none !important",
            outline: "none !important",
            backgroundColor: "transparent !important",
          },
        },
      });
    },
  ],
};
export default config;
