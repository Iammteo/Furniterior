import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Black + gold dominant palette
        ink: {
          DEFAULT: '#0A0A0A',     // True black for primary surfaces
          soft: '#141414',         // Slightly lifted black for cards/sections
          muted: '#1F1F1F',        // For subtle borders & dividers
          mute: '#5A5A5A',         // Mid-grey for secondary text on dark
        },
        gold: {
          DEFAULT: '#C9A86A',      // Primary gold — refined, not flashy
          bright: '#D9BC7A',       // Hover/accent gold
          deep: '#A88752',         // Pressed/dark gold
          pale: '#E8D8B0',         // Highlight gold for body text on dark
        },
        cream: {
          DEFAULT: '#F5F1E8',      // Light cream for sections needing lift
          warm: '#EEE6D2',         // Warmer cream tone
        },
        // Logo-native colours (used sparingly, only where logo lives)
        signal: {
          orange: '#E84F12',       // From the logo
          wine: '#7C1818',         // From the logo
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        wrap: '1440px',
      },
      animation: {
        ticker: 'tickerScroll 32s linear infinite',
        fadeUp: 'fadeUp 0.9s ease-out backwards',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        tickerScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
