const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
        },
        accent: {
          cyan: 'var(--accent-1)',
          magenta: 'var(--accent-2)',
        },
        neutral: {
          50: 'var(--neutral-050)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        skin: {
          primary: 'var(--color-primary)',
          background: 'var(--color-background)',
          'off-background': 'var(--color-off-background)',
          text: 'var(--color-text)',
          'text-highlight': 'var(--color-text-highlight)',
        },
      },
      boxShadow: {
        'primary-hover': 'rgba(255, 90, 0, 0.5) 0px 1px 2.5rem',
        standard: 'rgba(0, 0, 0, 0.05) 0px 1rem 2rem',
        dark: 'rgba(10, 12, 14, 0.9) 0px 1rem 2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: 'var(--text)',
            },
            color: 'var(--text)',
            h1: {
              color: 'var(--color-text-highlight)',
            },
            h2: {
              color: 'var(--color-text-highlight)',
            },
            h3: {
              color: 'var(--color-text-highlight)',
            },
            h4: {
              color: 'var(--color-text-highlight)',
            },
            h5: {
              color: 'var(--color-text-highlight)',
            },
            h6: {
              color: 'var(--color-text-highlight)',
            },
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};

module.exports = config;
