/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#050505',
          muted: '#0c0c10',
          border: '#1f1f27',
        },
      },
      maxWidth: {
        site: '72rem',
      },
      keyframes: {
        beam: {
          '0%': { strokeDashoffset: '220' },
          '100%': { strokeDashoffset: '-220' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        beamFall: {
          '0%': { transform: 'translateY(-120%)', opacity: '0' },
          '18%': { opacity: '1' },
          '82%': { opacity: '1' },
          '100%': { transform: 'translateY(220%)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'translateY(0px) scale(0.4)' },
          '50%': { opacity: '1', transform: 'translateY(-10px) scale(1)' },
        },
        orb: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(24px, -18px, 0) scale(1.08)' },
        },
        orbSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(-20px, 16px, 0) scale(1.12)' },
        },
      },
      animation: {
        beam: 'beam 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'beam-fall': 'beamFall 2.8s linear infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        orb: 'orb 14s ease-in-out infinite',
        'orb-slow': 'orbSlow 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
