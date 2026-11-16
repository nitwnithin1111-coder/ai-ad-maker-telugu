/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1e1b8f',
          purple: '#6d28d9',
          cyan: '#06b6d4',
          black: '#07060d',
          white: '#f4f2fb',
          darkBg: '#07060d',
          darkSurface: '#0f0e1a',
          darkBorder: '#1c1a30',
          lightBg: '#f8f9fe',
          lightSurface: '#ffffff',
          lightBorder: '#e2e5f5',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6d28d9 0%, #1e1b8f 50%, #06b6d4 100%)',
        'glow-radial': 'radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.25) 0%, rgba(6, 182, 212, 0.1) 45%, transparent 70%)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
