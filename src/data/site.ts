// Global site data. Edit here, not in the templates.
import type { Lang } from '../lib/i18n';

type T = Record<Lang, string>;

export const site = {
  name: 'Joan Martí Díez',
  role: 'Senior Product Designer',
  location: { en: 'Zug, Switzerland', de: 'Zug, Schweiz', es: 'Zug, Suiza' } as T,

  // Shown in the <title> of each home page and in search results.
  metaTitle: {
    en: 'Joan Martí Díez, Senior Product Designer for complex, data-heavy products',
    de: 'Joan Martí Díez, Senior Product Designer für komplexe, datenreiche Produkte',
    es: 'Joan Martí Díez, Senior Product Designer de productos complejos y con muchos datos',
  } as T,
  metaDescription: {
    en: 'Senior Product Designer with 16 years in fintech, trading platforms and marketplaces. I own complex, data-heavy products end to end, build design systems and design with AI. Based in Zug, Switzerland, open to Europe and remote roles with US companies.',
    de: 'Senior Product Designer mit 16 Jahren Erfahrung in Fintech, Handelsplattformen und Marktplätzen. Ich verantworte komplexe, datenreiche Produkte von Anfang bis Ende, baue Designsysteme und gestalte mit KI. Wohnhaft in Zug, offen für Europa und Remote-Rollen bei US-Unternehmen.',
    es: 'Senior Product Designer con 16 años en fintech, plataformas de trading y marketplaces. Me ocupo de productos complejos y con muchos datos de principio a fin, creo design systems y diseño con IA. Vivo en Zug, Suiza, y estoy abierto a Europa y a empresas de EE. UU. en remoto.',
  } as T,

  availability: {
    open: true,
    text: {
      en: 'Open to senior product design roles in Switzerland and Europe, and remote roles with US companies (overlap with the US East Coast until 19:00 CET). As an employee or contractor.',
      de: 'Offen für Senior-Rollen im Produktdesign in der Schweiz und in Europa sowie für Remote-Rollen bei US-Unternehmen (Überschneidung mit der US-Ostküste bis 19:00 MEZ). Festanstellung oder Mandat.',
      es: 'Disponible para puestos senior de diseño de producto en Suiza y Europa, y en remoto para empresas de EE. UU. (solapamiento con la costa este hasta las 19:00 CET). Como empleado o contractor.',
    } as T,
  },

  // Google Tag Manager container. GA4 is configured inside GTM. Leave empty to disable.
  gtm: 'GTM-K25MLZ7C',
  // Google Analytics 4, loaded directly (do not add a second GA4 tag inside GTM, or visits count twice).
  ga4: 'G-RKGB7FGH91',

  email: 'joanmartidiez@gmail.com',
  // TODO: add your Calendly or Cal.com link, or leave empty to hide the button.
  calendar: '',
  // TODO: drop your CV at public/joan-marti-diez-cv.pdf
  cv: 'joan-marti-diez-cv.pdf',

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joan-marti-productdesigner/' },
    { label: 'Medium', href: 'https://medium.com/@campecha' },
    // TODO: add your Substack URL, for example https://campecha.substack.com (links without href are hidden)
    { label: 'Substack', href: '' },
    { label: 'GitHub', href: 'https://github.com/JoanMarti' },
    { label: 'Behance', href: 'https://www.behance.net/campecha' },
  ],

  languages: {
    en: [
      ['Spanish', 'Native'],
      ['Catalan', 'Native'],
      ['English', 'C1'],
      ['German', 'A2, improving'],
      ['French', 'B2'],
      ['Italian', 'A2'],
    ],
    de: [
      ['Spanisch', 'Muttersprache'],
      ['Katalanisch', 'Muttersprache'],
      ['Englisch', 'C1'],
      ['Deutsch', 'A2, in Verbesserung'],
      ['Französisch', 'B2'],
      ['Italienisch', 'A2'],
    ],
    es: [
      ['Español', 'Nativo'],
      ['Catalán', 'Nativo'],
      ['Inglés', 'C1'],
      ['Alemán', 'A2, mejorando'],
      ['Francés', 'B2'],
      ['Italiano', 'A2'],
    ],
  } as Record<Lang, [string, string][]>,
};
