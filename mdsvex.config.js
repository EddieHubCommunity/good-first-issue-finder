import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.md'],
  layout: {
    docs: './src/lib/components/docs/layout.svelte',
  },

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
