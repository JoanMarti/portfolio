// Encrypts the private sections in /private (never committed) into src/data/locked/*.json.
// Usage: LOCK_PASSWORD='...' node scripts/lock.mjs
// Each private/<slug>.<lang>.json holds { teaser, ui, html }. Images are referenced in html as {{img:name}}
// and read from private/<slug>-img/<name>.webp, so they travel inside the encrypted payload.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { webcrypto as crypto } from 'node:crypto';

const pass = process.env.LOCK_PASSWORD;
if (!pass) { console.error('Set LOCK_PASSWORD'); process.exit(1); }
const ITER = 310000;
const b64 = (buf) => Buffer.from(buf).toString('base64');

for (const file of readdirSync('private').filter((f) => f.endsWith('.json'))) {
  const [slug] = file.split('.');
  const src = JSON.parse(readFileSync(`private/${file}`, 'utf8'));
  const html = src.html.replace(/\{\{img:([\w-]+)\}\}/g, (_, name) => {
    const p = `private/${slug}-img/${name}.webp`;
    if (!existsSync(p)) throw new Error(`Missing image ${p}`);
    return `data:image/webp;base64,${readFileSync(p).toString('base64')}`;
  });
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' }, base,
    { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(html));
  writeFileSync(`src/data/locked/${file}`, JSON.stringify({ teaser: src.teaser, ui: src.ui, iter: ITER, salt: b64(salt), iv: b64(iv), ct: b64(ct) }));
  console.log('locked', file, Math.round(ct.byteLength / 1024) + ' KB');
}
