import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json';

/** @type {import('vite').UserConfig} */
const config = ({ command }) => ({
  ssr: command === 'build' && {
    external: Object.keys(pkg.dependencies),
    noExternal: true,
  },
  plugins: [sveltekit()],
  server: {
    hmr: {
      clientPort: process.env.HMR_HOST ? 443 : 5173,
      host: process.env.HMR_HOST ? process.env.HMR_HOST.substring('https://'.length) : 'localhost',
    },
  },
});

export default config;
