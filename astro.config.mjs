import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://milehightechrescue.com',
  integrations: [tailwind(), sitemap()],
  output: 'static',

  build: {
    format: 'file'
  },

  adapter: cloudflare()
});