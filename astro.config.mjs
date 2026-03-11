// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const siteUrl = process.env.SITE_URL || 'https://bondimedical.example.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.tail8603bc.ts.net', 'localhost', '127.0.0.1']
    },
    preview: {
      allowedHosts: ['.tail8603bc.ts.net', 'localhost', '127.0.0.1']
    }
  }
});