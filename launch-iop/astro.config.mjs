import { defineConfig } from 'astro/config';
import vercel from '@vercel/astro';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic()],
});
