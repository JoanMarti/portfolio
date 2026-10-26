// Prefix internal links with the base path, so the site works both on a custom
// domain ("/") and on GitHub Pages under a sub-path ("/repo-name/").
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

// Front-matter values still marked "TODO" are treated as missing on the page.
export function filled(value?: string | null): string | undefined {
  if (!value) return undefined;
  return value.trim().toUpperCase().startsWith('TODO') ? undefined : value;
}
