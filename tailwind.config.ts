import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'slide-x': 'slide-x 5s linear 0s infinite alternate',
        'slide-y': 'slide-y 5s linear 0s infinite alternate',
        'rotate-360': 'rotate-360 5s linear 0s infinite alternate',
      },
      keyframes: {
        'slide-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'rotate-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      fontFamily: {
        'display': ['"Be Vietnam Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
