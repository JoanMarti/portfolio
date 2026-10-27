"""Bundle the built Astro site (dist/) into one self-contained HTML page with
in-page navigation, for a shareable live preview. Run after `npm run build`."""
import base64, json, pathlib, re, sys

dist = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else 'dist')
out = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else 'demo/index.html')

def route_of(p):
    rel = p.relative_to(dist).as_posix()
    if rel == 'index.html': return '/'
    if rel == '404.html': return None
    return '/' + rel[:-len('index.html')]

css, routes, chrome = [], {}, None
for f in sorted(dist.glob('_astro/*.css')):
    css.append(f.read_text())
for p in sorted(dist.rglob('index.html')):
    r = route_of(p)
    if r is None: continue
    html = p.read_text()
    for s in re.findall(r'<style[^>]*>(.*?)</style>', html, re.S):
        if s not in css: css.append(s)
    title = re.search(r'<title>(.*?)</title>', html, re.S).group(1)
    main = re.search(r'<main id="main"[^>]*>(.*?)</main>', html, re.S).group(1)
    # Inline local images (the demo runs where only data: URIs are allowed).
    def inline(m):
        f = dist / m.group(2).lstrip('/')
        if not f.exists(): return m.group(0)
        mime = {'.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml'}[f.suffix]
        return f'{m.group(1)}="data:{mime};base64,{base64.b64encode(f.read_bytes()).decode()}"'
    main = re.sub(r'<a href="/projects/[^"]+"', '<a', main).replace(' loading="lazy"', '')
    main = re.sub(r'(src)="(/(?:projects|images)/[^"]+)"', inline, main)
    routes[r] = {'title': title, 'html': main}
    if r == '/':
        header = re.search(r'(<header class="site-header.*?</header>)', html, re.S).group(1)
        footer = re.search(r'(<footer id="contact".*?</footer>)', html, re.S).group(1)
        chrome = (header, footer)

def token(r):  # bare hash token for each view
    return 'home' if r == '/' else r.strip('/').replace('/', '-')

page = f'''<title>Joan Martí Díez Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
<style>{"".join(css)}
html {{ scroll-behavior: smooth; }}
@media (prefers-reduced-motion: no-preference) {{
  #main.enter {{ animation: viewIn 420ms cubic-bezier(.2,.7,.1,1) both; }}
  @keyframes viewIn {{ from {{ opacity: 0; transform: translateY(14px); }} to {{ opacity: 1; transform: none; }} }}
}}
</style>
<a class="skip" href="#main">Skip to content</a>
{chrome[0]}
<main id="main"></main>
{chrome[1]}
<script>
const ROUTES = {json.dumps(routes, ensure_ascii=False)};
const TOKENS = {json.dumps({token(r): r for r in routes})};
const tokenOf = r => r === '/' ? 'home' : r.replace(/^\\/|\\/$/g, '').replace(/\\//g, '-');
const main = document.getElementById('main');
let current = null;

function show(path, anchor, push) {{
  if (!ROUTES[path]) path = '/';
  if (path !== current) {{
    current = path;
    main.innerHTML = ROUTES[path].html;
    document.title = ROUTES[path].title.replace(/&amp;/g, '&');
    main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter');
    document.querySelectorAll('.site-header nav a').forEach(a => {{
      const key = a.getAttribute('href');
      a.toggleAttribute('aria-current', (key === '/about/' && path === '/about/') || (key === '/writing/' && path === '/writing/') || (key === '/#work' && path.startsWith('/work/')));
    }});
  }}
  const target = anchor && document.getElementById(anchor);
  if (target) target.scrollIntoView({{ block: 'start' }});
  else if (!anchor) window.scrollTo(0, 0);
  if (push) {{ try {{ history.replaceState(null, '', '#' + tokenOf(path)); }} catch (e) {{}} }}
}}

document.addEventListener('click', e => {{
  const a = e.target.closest('a[href]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href.startsWith('#')) {{
    const el = document.getElementById(href.slice(1));
    if (el) {{ e.preventDefault(); el.scrollIntoView({{ block: 'start' }}); }}
    return;
  }}
  if (!href.startsWith('/') || href.startsWith('//')) return;
  e.preventDefault();
  const [path, anchor] = href.split('#');
  show(path.endsWith('/') ? path : path + '/', anchor, true);
}});

const start = (location.hash || '').slice(1);
if (TOKENS[start]) show(TOKENS[start], null, false);
else if (start === 'work') show('/', 'work', false);
else show('/', null, false);
</script>
'''
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(page)
print(out, len(page)//1024, 'KB', list(routes))
