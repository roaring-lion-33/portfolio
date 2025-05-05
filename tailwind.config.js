// tailwind.config.js

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        github: {
          css: {
            maxWidth: "80ch",
            color: theme("colors.gray.800"),
            fontFamily: fontFamily.sans.join(", "),
            a: {
              color: theme("colors.blue.600"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
            h1: {
              fontWeight: "700",
              fontSize: theme("fontSize.3xl")[0],
              marginBottom: theme("spacing.4"),
            },
            h2: {
              fontWeight: "600",
              fontSize: theme("fontSize.2xl")[0],
              marginTop: theme("spacing.10"),
              marginBottom: theme("spacing.4"),
              borderBottom: `1px solid ${theme("colors.gray.300")}`,
              paddingBottom: theme("spacing.2"),
            },
            h3: {
              fontWeight: "600",
              fontSize: theme("fontSize.xl")[0],
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.2"),
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.pink.600"),
              padding: "0.25rem 0.375rem",
              borderRadius: theme("borderRadius.md"),
              fontSize: "0.875em",
              fontFamily: fontFamily.mono.join(", "),
            },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.100"),
              borderRadius: theme("borderRadius.lg"),
              padding: theme("spacing.4"),
              overflowX: "auto",
              fontSize: "0.875rem",
              lineHeight: theme("lineHeight.relaxed"),
            },
            blockquote: {
              fontStyle: "normal",
              borderLeft: `4px solid ${theme("colors.gray.300")}`,
              paddingLeft: theme("spacing.4"),
              color: theme("colors.gray.600"),
            },
            ul: {
              paddingLeft: theme("spacing.6"),
              listStyleType: "disc",
            },
            ol: {
              paddingLeft: theme("spacing.6"),
              listStyleType: "decimal",
            },
            table: {
              width: "100%",
              borderCollapse: "collapse",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
            th: {
              borderBottom: `1px solid ${theme("colors.gray.300")}`,
              padding: theme("spacing.2"),
              textAlign: "left",
              fontWeight: "600",
            },
            td: {
              borderBottom: `1px solid ${theme("colors.gray.200")}`,
              padding: theme("spacing.2"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
