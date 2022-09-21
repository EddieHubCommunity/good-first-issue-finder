import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import autolinkHeadings from 'rehype-autolink-headings';
import slugPlugin from 'rehype-slug';

const config = defineConfig({
  extensions: ['.md'],
  layout: {
    docs: './src/lib/components/docs/layout.svelte',
  },

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [slugPlugin, [autolinkHeadings, { behavior: 'append' }]],
});

export default config;
