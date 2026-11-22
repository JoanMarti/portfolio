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
];
