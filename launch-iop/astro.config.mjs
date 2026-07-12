import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.launchiop.com',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic(), sitemap()],
});
