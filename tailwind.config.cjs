const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skin: {
          primary: 'var(--color-primary)',
          background: 'var(--color-background)',
          'off-background': 'var(--color-off-background)',
          text: 'var(--color-text)',
          'text-highlight': 'var(--color-text-highlight)',
        },
      },
      boxShadow: {
        standard: 'rgba(0, 0, 0, 0.05) 0px 1rem 2rem',
        dark: 'rgba(10, 12, 14, 0.9) 0px 1rem 2rem',
      },
    },
  },

  plugins: [],
};

module.exports = config;
