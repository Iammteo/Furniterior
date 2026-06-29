// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Black + gold dominant palette
//         ink: {
//           DEFAULT: '#0A0A0A',     // True black for primary surfaces
//           soft: '#141414',         // Slightly lifted black for cards/sections
//           muted: '#1F1F1F',        // For subtle borders & dividers
//           mute: '#5A5A5A',         // Mid-grey for secondary text on dark
//         },
//         gold: {
//           DEFAULT: '#C9A86A',      // Primary gold - refined, not flashy
//           bright: '#D9BC7A',       // Hover/accent gold
//           deep: '#A88752',         // Pressed/dark gold
//           pale: '#E8D8B0',         // Highlight gold for body text on dark
//         },
//         cream: {
//           DEFAULT: '#F5F1E8',      // Light cream for sections needing lift
//           warm: '#EEE6D2',         // Warmer cream tone
//         },
//         // Logo-native colours (used sparingly, only where logo lives)
//         signal: {
//           orange: '#E84F12',       // From the logo
//           wine: '#7C1818',         // From the logo
//         },
//       },
//       fontFamily: {
//         display: ['Playfair Display', 'Georgia', 'serif'],
//         sans: ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
//         mono: ['JetBrains Mono', 'monospace'],
//       },
//       maxWidth: {
//         wrap: '1440px',
//       },
//       animation: {
//         ticker: 'tickerScroll 32s linear infinite',
//         fadeUp: 'fadeUp 0.9s ease-out backwards',
//         shimmer: 'shimmer 3s ease-in-out infinite',
//       },
//       keyframes: {
//         tickerScroll: {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-50%)' },
//         },
//         fadeUp: {
//           from: { opacity: '0', transform: 'translateY(24px)' },
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },
//         shimmer: {
//           '0%, 100%': { opacity: '0.5' },
//           '50%': { opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Lifted black palette - still dark but with more warmth and air
        ink: {
          DEFAULT: '#181510',     // Warm dark brown-black (was pure #0A0A0A)
          soft: '#231E17',        // Warm card surface (was cold #141414)
          muted: '#2E2820',       // Warm divider tone
          mute: '#7A7060',        // Warmer mid-grey for secondary text
        },
        gold: {
          DEFAULT: '#D4A853',     // Richer, brighter gold (was muted #C9A86A)
          bright: '#E2BC68',      // Hover gold - punchier
          deep: '#B08840',        // Pressed/dark gold
          pale: '#F0DFA8',        // Highlight - warmer and more legible
        },
        cream: {
          DEFAULT: '#FAF6EC',     // Brighter cream for light-mode sections
          warm: '#F2EAD6',        // Warm cream tone
        },
        // Logo-native colours
        signal: {
          orange: '#E84F12',
          wine: '#7C1818',
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