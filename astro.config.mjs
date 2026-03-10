// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bondimedical.example.com',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['cube.tail8603bc.ts.net', 'localhost', '127.0.0.1']
    },
    preview: {
      allowedHosts: ['cube.tail8603bc.ts.net', 'localhost', '127.0.0.1']
    }
  }
});