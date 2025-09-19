/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'hebrew': ['Heebo', 'system-ui', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        ids: {
          bg: '#0b0f17',
          primary: '#2f6bff',
          secondary: '#00d1ff',
          accent: '#7aa5ff',
          muted: '#9aa3b2',
          gold: '#d4af37',
          cream: '#f5efe6',
        },
      },
      boxShadow: {
        'neon': '0 0 24px rgba(47,107,255,0.85), 0 0 80px rgba(0,209,255,0.35)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(147, 51, 234, 0.4)',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(12px)'}, '100%': { opacity: 1, transform: 'translateY(0)'} },
        shimmer: { '0%': { transform: 'translateX(-150%)'}, '100%': { transform: 'translateX(150%)'} },
        float: { '0%, 100%': { transform: 'translateY(0px)'}, '50%': { transform: 'translateY(-10px)'} },
        pulse: { '0%, 100%': { opacity: 1}, '50%': { opacity: 0.5} },
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-out both',
        shimmer: 'shimmer 2.8s linear infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
