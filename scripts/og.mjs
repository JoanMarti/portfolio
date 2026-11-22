// Social share images (1200x630) for each case study, built from its diagram cover.
// Usage: npm run build, serve dist on :4399 (python3 -m http.server 4399 -d dist),
// then: node scripts/og.mjs. Writes public/og/<slug>.png; rebuild afterwards.
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // run with NODE_PATH=$(npm root -g) if playwright is global
import { readdirSync, mkdirSync } from 'node:fs';

const origin = process.env.ORIGIN || 'http://localhost:4399';
const slugs = readdirSync('dist/work', { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
mkdirSync('public/og', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2, colorScheme: 'light' });
await ctx.addInitScript(() => { try { localStorage.setItem('consent-analytics', 'denied'); } catch (e) {} });
await ctx.route(/googletagmanager|google-analytics/, (r) => r.abort());
const page = await ctx.newPage();
const card = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const slug of slugs) {
  await page.goto(`${origin}/work/${slug}/`, { waitUntil: 'networkidle' });
  const cover = await page.$('article .cover, article .img-cover');
  const shot = (await cover.screenshot({ type: 'png' })).toString('base64');
  const { title, headline, sector } = await page.evaluate(() => ({
    title: document.title.split(' case study')[0],
    headline: document.querySelector('.cs-head h1')?.textContent?.trim() ?? '',
    sector: [...document.querySelectorAll('.facts div')].find((d) => /Sector/i.test(d.querySelector('dt')?.textContent ?? ''))?.querySelector('dd')?.textContent?.trim() ?? '',
  }));
  await card.setContent(`<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;600;700&display=swap" rel="stylesheet"><style>
    *{box-sizing:border-box;margin:0}
    body{width:1200px;height:630px;background:#f2f3ef;color:#18212b;font-family:'Schibsted Grotesk',system-ui,sans-serif;display:grid;grid-template-columns:470px 1fr;gap:40px;padding:56px;align-items:center}
    .k{font-size:22px;font-weight:600;color:#2446c8;letter-spacing:.02em;text-transform:uppercase}
    h1{font-size:60px;line-height:1.02;letter-spacing:-.03em;margin-top:18px}
    p{font-size:26px;line-height:1.3;color:#5a6570;margin-top:18px}
    .by{margin-top:40px;font-size:22px;font-weight:600}
    .by span{display:block;font-weight:400;color:#5a6570;margin-top:4px}
    img{width:100%;border-radius:20px;display:block}
  </style></head><body><div><div class="k">Case study · ${sector}</div><h1>${title}</h1><p>${headline}</p>
    <div class="by">Joan Martí Díez<span>Senior Product Designer · campecha.com</span></div></div>
    <img src="data:image/png;base64,${shot}"></body></html>`, { waitUntil: 'networkidle' });
  await card.screenshot({ path: `public/og/${slug}.png` });
  console.log('og', slug);
}
await browser.close();
