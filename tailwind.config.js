/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kingdom: {
          950: '#03060c', // near black abyss
          900: '#070c18', // deep royal void
          850: '#0b1324', // night midnight
          800: '#111d35', // castle stone slate
          700: '#1a2a4b', // deep blue dusk
          600: '#253b65',
        },
        gold: {
          300: '#fef08a',
          400: '#facc15',
          500: '#eab308', // metallic gold
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          DEFAULT: '#d4af37', // royal forged gold
        },
        crimson: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // blood flame
          700: '#b91c1c',
          800: '#991b1b', // imperial crimson
          900: '#7f1d1d',
          950: '#450a0a',
          DEFAULT: '#991b1b',
        },
        steel: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          DEFAULT: '#94a3b8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'radial-gradient(circle at 50% 0%, rgba(185, 28, 28, 0.15), rgba(7, 12, 24, 0.8) 50%, rgba(3, 6, 12, 1) 100%)',
        'gold-sheen': 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0) 50%, rgba(212, 175, 55, 0.2) 100%)',
        'forged-border': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6), rgba(220, 38, 38, 0.6), transparent)',
      },
      boxShadow: {
        'royal-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'crimson-glow': '0 0 30px -5px rgba(220, 38, 38, 0.35)',
        'inner-metal': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

