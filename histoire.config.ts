import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import path from 'path';

export default defineConfig({
  setupFile: 'src/histoire-setup.ts',
  plugins: [HstSvelte()],
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
      },
    },
    server: {
      hmr: {
        clientPort: process.env.HISTOIRE_HOST ? 443 : 6006,
        host: process.env.HISTOIRE_HOST
          ? process.env.HISTOIRE_HOST.substring('https://'.length)
          : 'localhost',
      },
    },
  },
});
