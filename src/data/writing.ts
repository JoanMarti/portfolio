// Articles published elsewhere (Medium, Substack, LinkedIn). The portfolio lists them and links to
// the original, so the canonical copy stays on the platform. Titles stay in the article's language.
// To add one: copy an entry, newest first.
// TODO: replace the generic Medium links with each article's exact URL, and add dates.
import type { Lang } from '../lib/i18n';

export type Article = {
  title: string;
  excerpt: Record<Lang, string>;
  source: 'Medium' | 'Substack' | 'LinkedIn';
  url: string;
  date?: string; // 'YYYY-MM-DD'
  topic: Record<Lang, string>;
  relatedProject?: string; // project slug, shows the article on that case study
};

export const writing: Article[] = [
  {
    title: '13 Years, 4,700 People, Zero Generative AI: What GTA VI Teaches Us About Product Design',
    excerpt: {
      en: 'The biggest launch in entertainment history wasn’t generated: it was designed, written, built and tested by people. Why that should change how companies value Product and UX Designers, because not every success can be prompted.',
      de: 'Der grösste Launch der Unterhaltungsgeschichte wurde nicht generiert: Menschen haben ihn gestaltet, geschrieben, gebaut und getestet. Warum das verändern sollte, wie Unternehmen Product und UX Designer schätzen, denn nicht jeder Erfolg lässt sich prompten.',
      es: 'El mayor lanzamiento de la historia del entretenimiento no se generó: lo diseñaron, escribieron, construyeron y probaron personas. Por qué eso debería cambiar cómo las empresas valoran a los Product y UX Designers, porque no todo éxito se consigue con un prompt.',
    },
    source: 'Medium',
    url: 'https://medium.com/@campecha/13-years-4-700-people-zero-generative-ai-what-gta-vi-teaches-us-about-product-design-ba7ab374c48c',
    date: '2026-11-24',
    topic: { en: 'Product design and AI', de: 'Produktdesign und KI', es: 'Diseño de producto e IA' },
  },
  {
    title: 'Designing Access to Information',
    excerpt: {
      en: 'What Switzerland and Spain can teach us about the future of digital news: discovery, paywalls, personalisation and the move from design systems to experience systems.',
      de: 'Was die Schweiz und Spanien über die Zukunft digitaler Nachrichten lehren: Auffindbarkeit, Paywalls, Personalisierung und der Schritt vom Designsystem zum Erlebnissystem.',
      es: 'Lo que Suiza y España nos enseñan sobre el futuro de las noticias digitales: descubrimiento, muros de pago, personalización y el paso de los design systems a los sistemas de experiencia.',
    },
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joan-marti-productdesigner/recent-activity/articles/',
    date: '2026-09-08',
    topic: { en: 'Information architecture', de: 'Informationsarchitektur', es: 'Arquitectura de la información' },
  },
  {
    title: 'Tell Me What Kind of Company You Are, and I’ll Tell You What Design System You Need',
    excerpt: {
      en: 'Not every company needs a complex design system, and forcing one where it doesn’t belong can be a strategic mistake.',
      de: 'Nicht jedes Unternehmen braucht ein komplexes Designsystem. Eines zu erzwingen, wo es nicht passt, kann ein strategischer Fehler sein.',
      es: 'No todas las empresas necesitan un design system complejo, e imponerlo donde no encaja puede ser un error estratégico.',
    },
    source: 'Medium',
    url: 'https://medium.com/@campecha',
    topic: { en: 'Design systems', de: 'Designsysteme', es: 'Design systems' },
    relatedProject: 'crealogix-design-hub',
  },
  {
    title: 'UX Research in Private Banking',
    excerpt: {
      en: 'Private banking doesn’t struggle with technology. It struggles with truly knowing its users, and designing without real feedback is a luxury it can no longer afford.',
      de: 'Private Banking hat kein Technologieproblem. Es kennt seine Kundinnen und Kunden zu wenig, und ohne echtes Feedback zu gestalten, kann es sich nicht mehr leisten.',
      es: 'La banca privada no tiene un problema de tecnología. Le cuesta conocer de verdad a sus clientes, y diseñar sin feedback real es un lujo que ya no se puede permitir.',
    },
    source: 'Medium',
    url: 'https://medium.com/@campecha',
    topic: { en: 'Research', de: 'Forschung', es: 'Investigación' },
    relatedProject: 'julius-baer-onboarding',
  },
  {
    title: 'How to Run a Focus Group (Without Losing Your Mind)',
    excerpt: {
      en: 'What a focus group is good for, what it isn’t, and how to run one that produces decisions.',
      de: 'Wofür sich eine Fokusgruppe eignet, wofür nicht, und wie man eine durchführt, die zu Entscheidungen führt.',
      es: 'Para qué sirve un focus group, para qué no, y cómo organizar uno que acabe en decisiones.',
    },
    source: 'Medium',
    url: 'https://medium.com/@campecha',
    topic: { en: 'Research', de: 'Forschung', es: 'Investigación' },
  },
];
