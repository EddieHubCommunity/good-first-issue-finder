const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        background: '#f5f4f4',
        eddiehub: {
          100: '#ffb953',
          200: '#ff5a00',
          300: '#c23100',
        },
      },
      dropShadow: {
        standard: '0 1rem 2rem 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },

  plugins: [],
};

module.exports = config;
