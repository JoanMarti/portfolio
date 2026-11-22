// Structured data for case study pages (schema.org CreativeWork plus breadcrumbs).
import { site as siteData } from '../data/site';

export function caseJsonLd({ d, lang, pageUrl, image, home, site }: { d: any; lang: string; pageUrl: string; image: string; home: string; site: URL }) {
  const site_ = siteData;
  return {
  '@graph': [
    {
      '@type': 'CreativeWork',
      '@id': `${pageUrl}#case`,
      name: `${d.title}: ${d.headline}`,
      headline: d.headline,
      description: d.summary,
      url: pageUrl,
      inLanguage: lang,
      dateCreated: String(d.year).slice(0, 4),
      genre: 'Case study',
      about: d.sector,
      keywords: [d.sector, ...d.tools, 'Product design', 'UX'].join(', '),
      image: image,
      author: { '@type': 'Person', name: site_.name, jobTitle: site_.role, url: new URL('/', site).href },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: site_.name, item: home },
        { '@type': 'ListItem', position: 2, name: d.title, item: pageUrl },
      ],
    },
  ],
};

}
