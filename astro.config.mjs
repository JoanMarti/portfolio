// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH let the same code run on a custom domain (campecha.com)
// or on GitHub Pages under a sub-path (https://<user>.github.io/<repo>/).
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.campecha.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
