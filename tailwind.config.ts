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
        // Frost & Carbon system
        bg: '#FFFFFF',        // fond principal (blanc-forward)
        surface: '#F5F5F5',   // cartes claires / separations douces
        carbon: '#111111',    // bandeaux de preuve
        ink: '#111111',       // texte sur clair
        // navy conserve comme alias de carbon pour compat retro
        navy: '#111111',
        muted: '#555555',     // secondaire sur clair
        'muted-dark': '#999999', // secondaire sur carbon
        brand: {
          DEFAULT: '#00A4B4', // teal glacier
          deep: '#0E7C8C',    // hover / texte teal sur clair
          dark: '#0A6470',    // teal tres fonce
        },
        frost: '#D4F0F0',     // tint d'accent (pastilles)
        success: '#2A9D6E',
        warning: '#E0A83D',
        danger: '#D14343',
        highlight: '#FFD66B', // eclat rare (chiffre heros)
        line: '#E5E5E5',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(17,17,17,0.04), 0 4px 12px rgba(17,17,17,0.04)',
        card: '0 2px 6px rgba(17,17,17,0.05), 0 8px 24px rgba(17,17,17,0.05)',
        cta: '0 1px 2px rgba(0,164,180,0.2), 0 4px 12px rgba(0,164,180,0.15)',
        screen:
          '0 4px 24px rgba(17,17,17,0.08), 0 16px 48px rgba(17,17,17,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
