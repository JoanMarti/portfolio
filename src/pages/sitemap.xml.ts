// Sitemap with hreflang alternates for every language version of each page.
import type { APIRoute } from 'astro';
import { getProjects } from '../lib/projects';
import { langs, href } from '../lib/i18n';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects('en');
  const paths = ['/', '/about/', '/writing/', ...projects.map((p) => `/work/${p.slug}/`)];
  const abs = (lang: (typeof langs)[number], path: string) => new URL(href(lang, path), site).href;
  const urls = paths.flatMap((path) =>
    langs.map((lang) => {
      const alts = langs
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(l, path)}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('en', path)}"/>`)
        .join('\n');
      const priority = path === '/' ? '1.0' : path.startsWith('/work/') ? '0.8' : '0.6';
      return `  <url>\n    <loc>${abs(lang, path)}</loc>\n${alts}\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
