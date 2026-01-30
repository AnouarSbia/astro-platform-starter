/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#2B2E34',
          light: 'rgba(43, 46, 52, 0.7)',
          lighter: 'rgba(43, 46, 52, 0.4)',
        },
        'electric-blue': {
          DEFAULT: '#007BFF',
          dark: '#0056b3',
          light: 'rgba(0, 123, 255, 0.1)',
        },
        'light-grey': '#E6E6E6',
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Roboto Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.75rem', { lineHeight: '1.3' }],
        '4xl': ['2rem', { lineHeight: '1.3' }],
        '5xl': ['2.25rem', { lineHeight: '1.2' }],
        '6xl': ['2.625rem', { lineHeight: '1.2' }],
        '7xl': ['3rem', { lineHeight: '1.1' }],
        '8xl': ['3.5rem', { lineHeight: '1.1' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
        extrabold: '800',
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(43, 46, 52, 0.05)',
        'md': '0 4px 12px rgba(43, 46, 52, 0.08)',
        'lg': '0 8px 24px rgba(43, 46, 52, 0.12)',
        'xl': '0 12px 40px rgba(43, 46, 52, 0.15)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',  // 20px
          md: '2.5rem',        // 40px
          xl: '5rem',          // 80px
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '350ms',
      },
    },
  },
  plugins: [],
}
