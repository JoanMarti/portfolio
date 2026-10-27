// Markdown images become figures: ![alt](/path.webp "Caption")
// - wraps a paragraph that only holds an image in <figure> with a <figcaption> from the title
// - prefixes the site base path, so images work on GitHub Pages sub-paths
// - links the image to the full-size file
export default function rehypeFigures({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const fix = (src) => (src && src.startsWith('/') && !src.startsWith('//') ? prefix + src : src);
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'p') {
        const kids = child.children.filter((c) => !(c.type === 'text' && !c.value.trim()));
        if (kids.length === 1 && kids[0].tagName === 'img') {
          const img = kids[0];
          const src = fix(img.properties.src);
          const caption = img.properties.title;
          img.properties = { src, alt: img.properties.alt ?? '', loading: 'lazy', decoding: 'async' };
          const figure = {
            type: 'element', tagName: 'figure', properties: {},
            children: [{ type: 'element', tagName: 'a', properties: { href: src }, children: [img] }],
          };
          if (caption) figure.children.push({ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] });
          return figure;
        }
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}
