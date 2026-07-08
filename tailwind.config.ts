import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.12)",
          line: "rgba(255,255,255,0.14)"
        },
        lab: {
          cyan: "#5be7ff",
          blue: "#6aa7ff",
          violet: "#a78bfa",
          magenta: "#f472b6",
          emerald: "#4ade80",
          amber: "#fbbf24",
          ink: "#05060a"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "monospace"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem"
      },
      boxShadow: {
        glow: "0 0 80px rgba(91, 231, 255, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        "cursor-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" }
        }
      },
      animation: {
        "scan-line": "scan-line 4.8s linear infinite",
        shimmer: "shimmer 7s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "cursor-pulse": "cursor-pulse 1.1s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
