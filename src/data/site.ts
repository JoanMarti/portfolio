// Global site data. Edit here, not in the templates.
import type { Lang } from '../lib/i18n';

type T = Record<Lang, string>;

export const site = {
  name: 'Joan Martí Díez',
  role: 'Senior Product Designer',
  location: { en: 'Zug, Switzerland', de: 'Zug, Schweiz', es: 'Zug, Suiza' } as T,

  // Shown in the <title> of each home page and in search results.
  metaTitle: {
    en: 'Joan Martí Díez, Senior Product Designer for design systems',
    de: 'Joan Martí Díez, Senior Product Designer für Designsysteme',
    es: 'Joan Martí Díez, Senior Product Designer especializado en design systems',
  } as T,
  metaDescription: {
    en: 'Senior Product Designer with 16 years in banking, trading platforms, marketplaces and automotive. I build design systems and products for regulated, high-stakes environments. Based in Zug, Switzerland.',
    de: 'Senior Product Designer mit 16 Jahren Erfahrung in Banking, Handelsplattformen, Marktplätzen und der Automobilbranche. Ich baue Designsysteme und Produkte für regulierte, anspruchsvolle Umgebungen. Wohnhaft in Zug.',
    es: 'Senior Product Designer con 16 años de experiencia en banca, plataformas de trading, marketplaces y automoción. Creo design systems y productos para entornos regulados y exigentes. Vivo en Zug, Suiza.',
  } as T,

  availability: {
    open: true,
    text: {
      en: 'Open to senior product design roles and contracts in Switzerland and Europe: on-site, hybrid or remote.',
      de: 'Offen für Senior-Rollen und Mandate im Produktdesign in der Schweiz und in Europa: vor Ort, hybrid oder remote.',
      es: 'Disponible para puestos y proyectos senior de diseño de producto en Suiza y Europa: presencial, híbrido o en remoto.',
    } as T,
  },

  email: 'joanmartidiez@gmail.com',
  // TODO: add your Calendly or Cal.com link, or leave empty to hide the button.
  calendar: '',
  // TODO: drop your CV at public/joan-marti-diez-cv.pdf
  cv: 'joan-marti-diez-cv.pdf',

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joan-marti-productdesigner/' },
    { label: 'Medium', href: 'https://medium.com/@campecha' },
    // TODO: replace with your Substack URL, for example https://campecha.substack.com
    { label: 'Substack', href: 'https://substack.com/' },
    { label: 'GitHub', href: 'https://github.com/JoanMarti' },
    { label: 'Behance', href: 'https://www.behance.net/campecha' },
  ],

  languages: {
    en: [
      ['Spanish', 'Native'],
      ['Catalan', 'Native'],
      ['English', 'Professional'],
      ['German', 'Limited working'],
      ['French', 'Limited working'],
    ],
    de: [
      ['Spanisch', 'Muttersprache'],
      ['Katalanisch', 'Muttersprache'],
      ['Englisch', 'Verhandlungssicher'],
      ['Deutsch', 'Grundkenntnisse im Beruf'],
      ['Französisch', 'Grundkenntnisse im Beruf'],
    ],
    es: [
      ['Español', 'Nativo'],
      ['Catalán', 'Nativo'],
      ['Inglés', 'Profesional'],
      ['Alemán', 'Nivel básico profesional'],
      ['Francés', 'Nivel básico profesional'],
    ],
  } as Record<Lang, [string, string][]>,
};
