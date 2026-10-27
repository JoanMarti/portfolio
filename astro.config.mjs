// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigures from './src/lib/rehype-figures.mjs';

// SITE_URL / BASE_PATH let the same code run on a custom domain (campecha.com)
// or on GitHub Pages under a sub-path (https://<user>.github.io/<repo>/).
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.campecha.com',
  base,
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [[rehypeFigures, { base }]],
  },
});
