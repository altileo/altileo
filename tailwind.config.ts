import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        bg: '#FAFAF8',
        surface: '#FFFFFF',
        ink: '#111111',
        navy: '#0A2540',
        muted: '#5A5F66',
        brand: {
          DEFAULT: '#2DB8C9',
          deep: '#1A8A99',
          dark: '#147480',
        },
        success: '#65C28C',
        highlight: '#FFD66B',
        line: '#E8EAED',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(17,17,17,0.04), 0 4px 12px rgba(17,17,17,0.04)',
        card: '0 2px 6px rgba(17,17,17,0.05), 0 8px 24px rgba(17,17,17,0.05)',
        cta: '0 1px 2px rgba(26,138,153,0.2), 0 4px 12px rgba(26,138,153,0.15)',
        screen:
          '0 4px 24px rgba(17,17,17,0.08), 0 16px 48px rgba(17,17,17,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
