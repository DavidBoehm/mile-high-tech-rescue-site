/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0f172a',
        'tech-darker': '#020617',
        'tech-card': '#1e293b',
        'tech-accent': '#3b82f6',
        'tech-cyan': '#06b6d4',
        'tech-glow': '#60a5fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-1': 'float1 12s ease-in-out infinite',
        'float-2': 'float2 15s ease-in-out infinite',
        'float-3': 'float3 18s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(40px, 30px) scale(1.05)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, -30px) scale(0.95)' },
          '66%': { transform: 'translate(20px, 40px) scale(1.15)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '20%': { transform: 'translate(50px, 20px) scale(0.9)' },
          '40%': { transform: 'translate(-30px, -50px) scale(1.1)' },
          '60%': { transform: 'translate(20px, 30px) scale(0.95)' },
          '80%': { transform: 'translate(-40px, 10px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
