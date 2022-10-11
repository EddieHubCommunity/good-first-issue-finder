import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [HstSvelte()],
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
      },
    },
    server: {
      hmr: {
        clientPort: process.env.HMR_HOST ? 443 : 5173,
        host: process.env.HMR_HOST
          ? process.env.HMR_HOST.substring('https://'.length)
          : 'localhost',
      },
    },
  },
});
