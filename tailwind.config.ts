import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light mode colors
        background: {
          primary: "#fefcf8",    // Warm off-white
          secondary: "#f8f6f0",  // Soft cream
          DEFAULT: "#fefcf8",
        },
        foreground: {
          primary: "#2d3142",    // Charcoal gray with warm undertones
          secondary: "#4a5568",  // Lighter gray for secondary text
          DEFAULT: "#2d3142",
        },
        accent: {
          terracotta: "#d4a574", // Primary accent - warm terracotta/clay
          sage: "#9caf88",       // Secondary accent - sage green
          navy: "#2c3e50",       // Important elements - deep navy
          DEFAULT: "#d4a574",
        },
        // Dark mode colors
        dark: {
          background: {
            primary: "#1a1b23",    // Dark warm background
            secondary: "#252730",  // Slightly lighter dark background
          },
          foreground: {
            primary: "#f8f6f0",    // Light cream for dark mode text
            secondary: "#d1d5db",  // Slightly muted light text
          },
          accent: {
            terracotta: "#e2b894", // Lighter terracotta for dark mode
            sage: "#b2c4a2",       // Lighter sage for dark mode
            navy: "#4a6fa5",       // Lighter navy for dark mode
          },
        },
      },
      fontFamily: {
        // Scholarly serif for headings (academic gravitas)
        serif: [
          'Crimson Pro',
          'Source Serif Pro', 
          'Georgia',
          'serif'
        ],
        // Clean sans-serif for body text (readability)
        sans: [
          'Inter',
          'Source Sans Pro',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ],
        // Geometric sans-serif for accent/UI elements (modern)
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Menlo',
          'monospace'
        ],
        display: [
          'Inter',
          'Source Sans Pro', 
          'system-ui',
          'sans-serif'
        ],
      },
      spacing: {
        // Enhanced spacing for generous white space
        14: "3.5rem",
        18: "4.5rem", 
        22: "5.5rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
      },
      letterSpacing: {
        tighter: "-.04em",
        tight: "-.02em",
        normal: "0em",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
      },
      fontSize: {
        // Enhanced type scale for scholarly hierarchy
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],     // More generous line height for readability
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      boxShadow: {
        // Warm, soft shadows for depth
        xs: "0 1px 2px rgba(45, 49, 66, 0.1)",
        sm: "0 2px 4px rgba(45, 49, 66, 0.1), 0 1px 2px rgba(45, 49, 66, 0.06)",
        md: "0 4px 6px rgba(45, 49, 66, 0.1), 0 2px 4px rgba(45, 49, 66, 0.06)",
        lg: "0 10px 15px rgba(45, 49, 66, 0.1), 0 4px 6px rgba(45, 49, 66, 0.05)",
        xl: "0 20px 25px rgba(45, 49, 66, 0.1), 0 10px 10px rgba(45, 49, 66, 0.04)",
        "2xl": "0 25px 50px rgba(45, 49, 66, 0.15)",
        // Warm glow shadows using accent colors
        "warm": "0 4px 20px rgba(212, 165, 116, 0.15)",
        "warm-lg": "0 8px 30px rgba(212, 165, 116, 0.2)",
        inner: "inset 0 2px 4px rgba(45, 49, 66, 0.08)",
        none: "0 0 #0000",
      },
    },
  },
  plugins: [],
};
export default config;
