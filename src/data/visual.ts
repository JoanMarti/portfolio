// UI and visual design work shown in the "UI and visual design" tab on the home page.
// Case studies with `discipline: [visual]` in their front matter appear there too, before these.
// Images live in public/visual/. They come from the Behance covers (808 px wide):
// TODO: replace them with the original files at 1600 px or more.
import type { Lang } from '../lib/i18n';

type T = Record<Lang, string>;
export type VisualCategory = 'interface' | 'web' | 'brand' | 'advertising';

export const visualCategories: Record<VisualCategory, T> = {
  interface: { en: 'UI design', de: 'UI-Design', es: 'Diseño UI' },
  web: { en: 'Web design', de: 'Webdesign', es: 'Diseño web' },
  brand: { en: 'Brand identity', de: 'Markenidentität', es: 'Identidad de marca' },
  advertising: { en: 'Art direction', de: 'Art Direction', es: 'Dirección de arte' },
};

export type VisualWork = {
  title: string;
  category: VisualCategory;
  image: string; // path inside /public
  description: T;
  href: string; // Behance project or another page
  year?: string;
};

export const behanceProfile = 'https://www.behance.net/Campecha';

export const visualWork: VisualWork[] = [
  {
    title: 'Volvo Sensus',
    category: 'interface',
    image: '/visual/volvo.webp',
    description: {
      en: 'Redesign and interactive prototype of the Sensus in-car interface.',
      de: 'Redesign und interaktiver Prototyp der Fahrzeugoberfläche Sensus.',
      es: 'Rediseño y prototipo interactivo de la interfaz de coche Sensus.',
    },
    href: 'https://www.behance.net/gallery/43041207/Volvo-Sensus-redesign-interface-prototype',
  },
  {
    title: 'Turn Agency',
    category: 'web',
    image: '/visual/turn.webp',
    description: {
      en: 'Website for a branding agency.',
      de: 'Website für eine Branding-Agentur.',
      es: 'Web para una agencia de branding.',
    },
    href: 'https://www.behance.net/gallery/38832645/Turn-Agency',
  },
  {
    title: 'Madrona Dermatology',
    category: 'web',
    image: '/visual/madrona.webp',
    description: {
      en: 'Responsive website for a dermatology clinic.',
      de: 'Responsive Website für eine dermatologische Praxis.',
      es: 'Web adaptable para una clínica de dermatología.',
    },
    href: 'https://www.behance.net/gallery/47218769/Madrona-Dermatology',
  },
  {
    title: 'Industry Hefesto',
    category: 'web',
    image: '/visual/hefesto.webp',
    description: {
      en: 'Responsive website for an industrial steel company.',
      de: 'Responsive Website für ein Industrieunternehmen im Stahlbau.',
      es: 'Web adaptable para una empresa industrial del acero.',
    },
    href: 'https://www.behance.net/gallery/23967197/Industry-Hefesto',
  },
  {
    title: 'Polis Architecture',
    category: 'brand',
    image: '/visual/polis.webp',
    description: {
      en: 'Visual identity for an architecture studio.',
      de: 'Visuelle Identität für ein Architekturbüro.',
      es: 'Identidad visual para un estudio de arquitectura.',
    },
    href: 'https://www.behance.net/gallery/23891767/Polis-Architecture',
  },
  {
    title: 'Urrea',
    category: 'advertising',
    image: '/visual/urrea.webp',
    year: '2014',
    description: {
      en: 'Print and outdoor campaign for a bathroom brand.',
      de: 'Print- und Aussenwerbekampagne für eine Badmarke.',
      es: 'Campaña en prensa y exterior para una marca de baño.',
    },
    href: 'https://www.behance.net/gallery/27823501/Advertising-Urrea-2014',
  },
  {
    title: 'Supraterra',
    category: 'advertising',
    image: '/visual/supraterra.webp',
    description: {
      en: 'Outdoor advertising campaign.',
      de: 'Kampagne für Aussenwerbung.',
      es: 'Campaña de publicidad exterior.',
    },
    href: 'https://www.behance.net/gallery/27947463/Supraterra',
  },
  {
    title: 'Del Valle',
    category: 'advertising',
    image: '/visual/del-valle.webp',
    description: {
      en: 'Advertising for a fruit juice brand.',
      de: 'Werbung für eine Fruchtsaftmarke.',
      es: 'Publicidad para una marca de zumos.',
    },
    href: 'https://www.behance.net/gallery/27985747/The-secret-is-in-the-affection',
  },
];
