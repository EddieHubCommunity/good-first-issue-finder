const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');
const preprocess = require('svelte-preprocess');

module.exports = {
  staticDirs: ['../static'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-svelte-csf',
  ],
  framework: '@storybook/svelte',
  svelteOptions: {
    preprocess: [
      preprocess({
        postcss: true,
      }),
    ],
  },
  async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.js'),
    );

    return mergeConfig(config, {
      ...userConfig,
      resolve: {
        alias: {
          $lib: path.resolve('./src/lib'),
        },
      },
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};
