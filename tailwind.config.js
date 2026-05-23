/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        darkBg: '#09090b', // zinc-950
        cardBg: '#121214', // Slightly lighter elevated zinc
        accentIndigo: '#6366f1', // Indigo accent
        accentCyan: '#06b6d4', // Cyan accent
        accentEmerald: '#10b981', // Emerald accent
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
