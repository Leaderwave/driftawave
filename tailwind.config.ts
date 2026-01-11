import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // An Untamed Sunset Palette (Driftawave Brand 2025)
        'sunset-orange': '#F06025',
        'sunset-rust': '#C24A2F',
        'sunset-gold': '#FFB122',
        'sunset-sand': '#FDCD82',
        'sunset-black': '#000000',
        // Legacy colors (kept for compatibility)
        'warm-beige': '#F3F0EB',
        'brand-lime': '#8CB128',
        'gray-dark': '#555555',
        'gray-light': '#E5E5E5',
        brand: {
          // Primary brand colors
          orange: '#F06025',
          rust: '#C24A2F',
          gold: '#FFB122',
          sand: '#FDCD82',
          // Legacy
          sky: '#38BDF8',
          dark: '#050505',
          panel: '#0F110E',
          accent: '#A3D154',
          coral: '#E35B5B',
        },
        canvas: {
          light: '#F5F5F0',
          dark: '#121412',
        },
        text: {
          dark: '#1A1A1A',
          light: '#E6E6E6',
        },
        stroke: '#DADAD5',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        'brand': '32px', // Driftawave brand standard
        '4xl': '2rem', // 32px
        '3xl': '1.5rem', // 24px
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Driftawave Brand Typography
        display: ["Mistica", "serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        // Fallback/legacy
        sans: ["Helvetica Neue", "Manrope", "Inter", "sans-serif"],
        serif: ["Mistica", "Fraunces", "Playfair Display", "serif"],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 70% 50%, rgba(56, 189, 248, 0.25) 0%, rgba(5, 5, 5, 0) 60%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        beam: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'beam': 'beam 3s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config