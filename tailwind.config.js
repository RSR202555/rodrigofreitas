/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FCFBFA",
        dark: "#0E1720",
        primary: "#172A3A",
        secondary: "#5B6B7A",
        card: "#FFFFFF",
        cta: "#0E6E60",
        "cta-hover": "#148A79",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' }
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333333%)' }
        }
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'ticker': 'ticker 30s linear infinite',
      }
    },
  },
  plugins: [],
}
