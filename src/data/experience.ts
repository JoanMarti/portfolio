// Career timeline shown on the About page.
// TODO: add the years (period) for each role and confirm titles. LinkedIn hides them
// without login, so these come from your case studies and Malt profile only.
import type { Lang } from '../lib/i18n';

type T = Record<Lang, string>;

export type Role = {
  company: string;
  role: string;
  sector: T;
  period?: string; // for example '2023 to 2025'
  note: T;
};

export const experience: Role[] = [
  {
    company: 'Smartstamp',
    role: 'Product Designer',
    period: '2025',
    sector: { en: 'Art tech and authentication', de: 'Kunst und Echtheitsprüfung', es: 'Arte y autenticación' },
    note: {
      en: 'Redefined the information architecture and redesigned an iOS and Android app for artwork authentication.',
      de: 'Informationsarchitektur neu definiert und eine iOS- und Android-App zur Echtheitsprüfung von Kunstwerken neu gestaltet.',
      es: 'Redefiní la arquitectura de la información y rediseñé una app de iOS y Android para autenticar obras de arte.',
    },
  },
  {
    company: 'Glencore',
    role: 'Design System Lead, Senior UX Designer',
    sector: { en: 'Commodities trading (CTRM)', de: 'Rohstoffhandel (CTRM)', es: 'Trading de materias primas (CTRM)' },
    note: {
      en: 'Enterprise design system for a mission-critical copper trading platform.',
      de: 'Enterprise-Designsystem für eine geschäftskritische Kupferhandelsplattform.',
      es: 'Design system empresarial para una plataforma crítica de trading de cobre.',
    },
  },
  {
    company: 'IBM iX Switzerland, for Julius Baer',
    role: 'Lead UX/UI Designer',
    period: '2022',
    sector: { en: 'Private banking', de: 'Private Banking', es: 'Banca privada' },
    note: {
      en: 'Adaptive onboarding proof of concept for high-net-worth clients.',
      de: 'Proof of Concept für ein adaptives Onboarding vermögender Privatkunden.',
      es: 'Prueba de concepto de un onboarding adaptativo para clientes de alto patrimonio.',
    },
  },
  {
    company: 'Crealogix',
    role: 'Senior UX/UI Designer, Design Systems',
    sector: { en: 'Banking software (SaaS)', de: 'Banking-Software (SaaS)', es: 'Software bancario (SaaS)' },
    note: {
      en: 'White-label, multi-tenant design system across Europe and the Middle East.',
      de: 'Mandantenfähiges White-Label-Designsystem für Europa und den Nahen Osten.',
      es: 'Design system marca blanca y multicliente para Europa y Oriente Medio.',
    },
  },
  {
    company: 'Webrepublic',
    role: 'Senior UX Consultant',
    sector: { en: 'Digital marketing and SEO', de: 'Digitales Marketing und SEO', es: 'Marketing digital y SEO' },
    note: {
      en: 'Set up the first UX team inside the SEO division.',
      de: 'Aufbau des ersten UX-Teams innerhalb der SEO-Abteilung.',
      es: 'Creé el primer equipo de UX dentro del área de SEO.',
    },
  },
  {
    company: 'Adevinta, Coches.net',
    role: 'Senior UX/UI Designer',
    sector: { en: 'Automotive marketplace', de: 'Automarktplatz', es: 'Marketplace de automoción' },
    note: {
      en: 'Growth and retention for Spain’s leading car marketplace.',
      de: 'Wachstum und Kundenbindung für den führenden Automarktplatz Spaniens.',
      es: 'Crecimiento y retención para el marketplace de coches líder en España.',
    },
  },
  {
    company: 'Musiclist (Instamusic)',
    role: 'Product Design Lead',
    period: '2019',
    sector: { en: 'Consumer music startup', de: 'Musik-Startup', es: 'Startup de música' },
    note: {
      en: 'Took a mood-based discovery app from idea to MVP in three months.',
      de: 'Eine stimmungsbasierte Musik-App in drei Monaten von der Idee zum MVP gebracht.',
      es: 'Llevé una app de descubrimiento musical basada en el estado de ánimo de la idea al MVP en tres meses.',
    },
  },
  {
    company: 'Audi, Volkswagen Group',
    role: 'Senior UX / HMI Designer',
    period: '2015',
    sector: { en: 'Automotive', de: 'Automobil', es: 'Automoción' },
    note: {
      en: 'Information architecture and interaction model for the connected Audi A6 infotainment system.',
      de: 'Informationsarchitektur und Interaktionsmodell für das vernetzte Infotainmentsystem des Audi A6.',
      es: 'Arquitectura de la información y modelo de interacción del sistema de infoentretenimiento conectado del Audi A6.',
    },
  },
];

export const education: Record<Lang, string[]> = {
  en: ['Master’s in Advertising and Marketing Strategies', 'Graphic and Multimedia Design', 'Trend Analysis and Qualitative Research'],
  de: ['Master in Werbe- und Marketingstrategien', 'Grafik- und Multimediadesign', 'Trendanalyse und qualitative Forschung'],
  es: ['Máster en Estrategias de Publicidad y Marketing', 'Diseño Gráfico y Multimedia', 'Análisis de Tendencias e Investigación Cualitativa'],
  // TODO: confirm institutions (LinkedIn lists Universitat Ramon Llull).
};

// Public recommendations from LinkedIn, quoted word for word in their original English.
export const recommendations = [
  {
    quote:
      'One of Joan’s standout strengths is his ability to bridge the gap between design and development in a way that’s both seamless and productive.',
    name: 'Dzmitry Alifer',
    context: {
      en: 'worked with Joan on the same project and team for two years',
      de: 'arbeitete zwei Jahre im selben Projekt und Team mit Joan',
      es: 'trabajó con Joan en el mismo proyecto y equipo durante dos años',
    } as T,
  },
  {
    quote:
      'Joan is a fantastic designer: curious, strategic, and incredibly organized. He approaches every task with thoughtful structure and creativity, always balancing user needs, development effort and business goals.',
    name: 'Giuseppe Piacenza',
    context: { en: 'colleague', de: 'Kollege', es: 'compañero de trabajo' } as T,
  },
];
