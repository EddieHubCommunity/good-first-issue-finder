import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import path from 'path';

export default defineConfig({
  backgroundPresets: [
    {
      label: 'light',
      color: '#f5f4f4',
    },
    {
      label: 'dark',
      color: '#22272e',
    },
  ],
  setupFile: 'src/histoire-setup.ts',
  plugins: [HstSvelte()],
  vite: {
    publicDir: 'static',
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
      },
    },
  },
});
