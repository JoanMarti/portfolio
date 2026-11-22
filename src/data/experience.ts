// Career timeline shown on the About page, copied from LinkedIn (titles, companies, places and dates).
import type { Lang } from '../lib/i18n';

type T = Record<Lang, string>;

export type Role = {
  role: string; // title as on LinkedIn
  company: string;
  place: T;
  start: string; // YYYY-MM
  end: string; // YYYY-MM, or '' for a current role
  type?: T; // employment type when LinkedIn shows it
  note?: T;
  caseStudy?: string; // slug of the related case study
  group?: string; // roles at the same company share a group name
};

const ch = { en: 'Switzerland', de: 'Schweiz', es: 'Suiza' };
const zurich: T = { en: 'Zurich, ' + ch.en, de: 'Zürich, ' + ch.de, es: 'Zúrich, ' + ch.es };
const barcelona: T = { en: 'Barcelona, Spain', de: 'Barcelona, Spanien', es: 'Barcelona, España' };
const contract: T = { en: 'Contract', de: 'Vertrag', es: 'Contrato' };
const fullTime: T = { en: 'Full time', de: 'Vollzeit', es: 'Jornada completa' };

// Product, UX and UI roles, newest first (ordered by end date, as on LinkedIn).
export const experience: Role[] = [
  {
    role: 'Independent AI and Product Design Projects',
    company: 'Independent',
    place: { en: 'Remote', de: 'Remote', es: 'En remoto' },
    start: '2026-07', end: '',
    caseStudy: 'finora',
    note: {
      en: 'Design and build my own products in code with Claude Code and Cursor, including Finora, a Swiss wealth app in Flutter taken from zero to an Android 1.0 build, and AthleteOS, a data heavy insights app in React. Built an AI assisted design system playbook connected to Figma, with tokens, light and dark modes and automatic contrast checks.',
      de: 'Ich gestalte und baue eigene Produkte in Code mit Claude Code und Cursor, darunter Finora, eine Schweizer Vermögens-App in Flutter, von null bis zum Android-1.0-Build, und AthleteOS, eine datenreiche Insights-App in React. Dazu ein KI-gestütztes Designsystem-Playbook, verbunden mit Figma, mit Tokens, hellem und dunklem Modus und automatischen Kontrastprüfungen.',
      es: 'Diseño y construyo mis propios productos en código con Claude Code y Cursor, como Finora, una app suiza de patrimonio en Flutter llevada de cero a una versión 1.0 para Android, y AthleteOS, una app de datos en React. Creé un playbook de design system asistido por IA y conectado a Figma, con tokens, modo claro y oscuro y revisiones automáticas de contraste.',
    },
  },
  {
    role: 'Senior Product Design Consultant',
    company: 'VendueTech',
    place: { en: 'Steinhausen, Zug (remote)', de: 'Steinhausen, Zug (remote)', es: 'Steinhausen, Zug (remoto)' },
    start: '2025-03', end: '2026-06',
    type: { en: 'Part time', de: 'Teilzeit', es: 'Media jornada' },
    note: {
      en: 'Set the product design direction for Bidsale, an AI enabled real estate investment platform, with the founders: AI assisted semantic search with sources and controls, and complex financial data turned into clear, comparable views. 30% faster design to development.',
      de: 'Produktdesign-Richtung für Bidsale, eine KI-gestützte Immobilien-Investmentplattform, gemeinsam mit den Gründern: KI-gestützte semantische Suche mit Quellen und Steuerung sowie komplexe Finanzdaten in klaren, vergleichbaren Ansichten. 30% schneller vom Design zur Entwicklung.',
      es: 'Definí con los fundadores la dirección de diseño de Bidsale, una plataforma de inversión inmobiliaria con IA: búsqueda semántica asistida por IA con fuentes y controles, y datos financieros complejos convertidos en vistas claras y comparables. Un 30% más rápido del diseño al desarrollo.',
    },
  },
  {
    role: 'Senior Product Designer',
    company: 'SmartStamp',
    place: { en: 'Zurich (hybrid)', de: 'Zürich (hybrid)', es: 'Zúrich (híbrido)' },
    start: '2025-07', end: '2025-12',
    type: fullTime,
    caseStudy: 'smartstamp',
    note: {
      en: 'Led product design for a Swiss app for artwork authentication on iOS, Android and iPad: information architecture, onboarding, identity verification, payments and transfers, through three versions. 90% completion of the identity verification journey. Built the design system in Flutter with the developers, testing components and approving pull requests.',
      de: 'Leitung des Produktdesigns einer Schweizer App zur Echtheitsprüfung von Kunstwerken auf iOS, Android und iPad: Informationsarchitektur, Onboarding, Identitätsprüfung, Zahlungen und Transfers, über drei Versionen. 90% abgeschlossene Identitätsprüfungen. Designsystem in Flutter gemeinsam mit den Entwicklern gebaut, inklusive Komponententests und Freigabe von Pull Requests.',
      es: 'Lideré el diseño de producto de una app suiza para autenticar obras de arte en iOS, Android y iPad: arquitectura de la información, onboarding, verificación de identidad, pagos y transferencias, a lo largo de tres versiones. 90% de verificaciones de identidad completadas. Construí el design system en Flutter con los desarrolladores, probando componentes y aprobando pull requests.',
    },
  },
  {
    role: 'Design System Lead (acting Principal Designer)',
    company: 'Glencore',
    place: { en: 'Baar, Zug (on site)', de: 'Baar, Zug (vor Ort)', es: 'Baar, Zug (presencial)' },
    start: '2022-12', end: '2025-03',
    type: contract,
    caseStudy: 'glencore-ctrm',
    note: {
      en: 'Owned key product and design decisions for an internal trading and risk platform. Led 3 designers day to day, presented progress to business leaders every quarter, designed the deal capture MVP and built the design system with the Angular team.',
      de: 'Verantwortung für zentrale Produkt- und Designentscheide bei einer internen Plattform für Handel und Risikomanagement. Tägliche Führung von 3 Designern, quartalsweise Präsentationen vor der Geschäftsleitung, Design des Deal-Capture-MVP und Aufbau des Designsystems mit dem Angular-Team.',
      es: 'Tomé las decisiones clave de producto y diseño en una plataforma interna de trading y riesgos. Lideré a diario a 3 diseñadores, presenté avances a la dirección cada trimestre, diseñé el MVP de captura de operaciones y construí el design system con el equipo de Angular.',
    },
  },
  {
    role: 'Senior UX Designer',
    company: 'IBM iX',
    place: { en: 'Zurich (on site)', de: 'Zürich (vor Ort)', es: 'Zúrich (presencial)' },
    start: '2022-05', end: '2022-09',
    type: contract,
    caseStudy: 'julius-baer-onboarding',
    note: {
      en: 'Digital experiences for Julius Baer’s private banking and wealth management clients, from research to journeys and usability testing.',
      de: 'Digitale Erlebnisse für Private-Banking- und Wealth-Management-Kunden von Julius Bär, von der Forschung über Journeys bis zu Usability-Tests.',
      es: 'Experiencias digitales para clientes de banca privada y gestión patrimonial de Julius Baer, desde la investigación hasta los recorridos y los tests de usabilidad.',
    },
  },
  {
    role: 'Senior UX/UI Designer',
    company: 'Webrepublic AG',
    place: { en: 'Zurich (on site)', de: 'Zürich (vor Ort)', es: 'Zúrich (presencial)' },
    start: '2021-11', end: '2022-03',
    type: fullTime,
    note: {
      en: 'Founded and led the first UX team inside the SEO division, joining UX strategy and SEO practice.',
      de: 'Aufbau und Leitung des ersten UX-Teams in der SEO-Abteilung, als Brücke zwischen UX-Strategie und SEO.',
      es: 'Creé y lideré el primer equipo de UX dentro del área de SEO, uniendo estrategia de UX y SEO.',
    },
  },
  {
    role: 'Lead UX/UI Designer and Design Systems Specialist',
    company: 'Crealogix Group',
    group: 'crealogix',
    place: barcelona,
    start: '2020-04', end: '2021-11',
    type: fullTime,
    caseStudy: 'crealogix-design-hub',
    note: {
      en: 'Multi-brand design system for private, wealth, retail and corporate banking in Europe and the Middle East. Managed designers as direct reports. Clients included Julius Baer, Credit Suisse and J. Safra Sarasin.',
      de: 'Multi-Brand-Designsystem für Private, Wealth, Retail und Corporate Banking in Europa und dem Nahen Osten. Führung von Designern als direkte Mitarbeitende. Kunden u. a. Julius Bär, Credit Suisse und J. Safra Sarasin.',
      es: 'Design system multimarca para banca privada, patrimonial, minorista y corporativa en Europa y Oriente Medio. Diseñadores a mi cargo. Clientes como Julius Baer, Credit Suisse y J. Safra Sarasin.',
    },
  },
  {
    role: 'Senior UX/UI and Product Designer',
    company: 'Crealogix Group',
    group: 'crealogix',
    place: zurich,
    start: '2019-10', end: '2020-03',
    type: fullTime,
    note: {
      en: 'User research and a modular design system for private and retail banking platforms, later adopted by several banking clients.',
      de: 'Nutzerforschung und ein modulares Designsystem für Private- und Retail-Banking-Plattformen, später von mehreren Bankkunden übernommen.',
      es: 'Investigación con usuarios y un design system modular para plataformas de banca privada y minorista, adoptado después por varios bancos.',
    },
  },
  {
    role: 'Senior Product Designer and Product Manager',
    company: 'MusicList',
    place: barcelona,
    start: '2019-08', end: '2019-10',
    type: { en: 'Freelance', de: 'Freelance', es: 'Freelance' },
    caseStudy: 'instamusic',
    note: {
      en: 'Design and product for a music streaming app, taken from idea to MVP in three months.',
      de: 'Design und Produkt für eine Musik-Streaming-App, in drei Monaten von der Idee zum MVP.',
      es: 'Diseño y producto de una app de música en streaming, llevada de la idea al MVP en tres meses.',
    },
  },
  {
    role: 'Digital Design Programme Coordinator and UI Lecturer',
    company: 'EAD Sant Cugat',
    place: { en: 'Sant Cugat del Vallès, Spain', de: 'Sant Cugat del Vallès, Spanien', es: 'Sant Cugat del Vallès, España' },
    start: '2017-09', end: '2019-09',
    note: {
      en: 'Coordinated the Digital Design programme and taught interactive design, UX, Agile and prototyping.',
      de: 'Koordination des Studiengangs Digital Design und Unterricht in Interaktionsdesign, UX, Agile und Prototyping.',
      es: 'Coordiné el ciclo de Diseño Digital e impartí clases de diseño interactivo, UX, Agile y prototipado.',
    },
  },
  {
    role: 'Senior Product Designer, Growth and Retention',
    company: 'Adevinta Spain',
    place: barcelona,
    start: '2017-06', end: '2019-05',
    type: fullTime,
    caseStudy: 'coches-net-exploration-hub',
    note: {
      en: 'Designed the first Coches.net home across iOS, Android and web and ran continuous experiments with product and engineering: +25% direct leads while monthly traffic grew from 3M to 14M. Co-built SUI Components, Adevinta’s open source React library.',
      de: 'Gestaltung der ersten Coches.net-Startseite für iOS, Android und Web und laufende Experimente mit Produkt und Engineering: +25% direkte Leads, während der monatliche Traffic von 3 auf 14 Millionen wuchs. Mitentwicklung von SUI Components, der Open-Source-React-Bibliothek von Adevinta.',
      es: 'Diseñé la primera home de Coches.net en iOS, Android y web y lancé experimentos continuos con producto e ingeniería: +25% de leads directos mientras el tráfico mensual crecía de 3 a 14 millones. Co-construí SUI Components, la librería React de código abierto de Adevinta.',
    },
  },
  {
    role: 'Senior UX/UI Consultant, Retail Banking',
    company: 'Codiwans',
    place: barcelona,
    start: '2018-09', end: '2018-11',
    note: {
      en: 'UX and rapid prototyping of an MVP for a retail bank targeting users under 16.',
      de: 'UX und Rapid Prototyping eines MVP für eine Retailbank mit Zielgruppe unter 16 Jahren.',
      es: 'UX y prototipado rápido de un MVP para un banco minorista dirigido a menores de 16 años.',
    },
  },
  {
    role: 'Co-founder and Lead UX/UI Designer',
    company: 'MontrixSoft',
    place: { en: 'Barcelona area, Spain', de: 'Region Barcelona, Spanien', es: 'Área de Barcelona, España' },
    start: '2016-09', end: '2017-12',
    note: {
      en: 'Co-founded a business intelligence start-up and designed its dashboards and data analysis tools on QlikView, Power BI and Tableau.',
      de: 'Mitgründung eines Business-Intelligence-Start-ups und Gestaltung seiner Dashboards und Datenanalyse-Werkzeuge auf Basis von QlikView, Power BI und Tableau.',
      es: 'Cofundé una start-up de business intelligence y diseñé sus dashboards y herramientas de análisis de datos sobre QlikView, Power BI y Tableau.',
    },
  },
  {
    role: 'Senior User Interface Designer',
    company: 'Uedelhoven GmbH & Co. KG',
    place: { en: 'Munich, Germany', de: 'München, Deutschland', es: 'Múnich, Alemania' },
    start: '2015-11', end: '2016-06',
    caseStudy: 'audi-a6-hmi',
    note: {
      en: 'HMI for connected Audi vehicles: navigation, media, phone and system interactions across touch, voice and physical controls.',
      de: 'HMI für vernetzte Audi-Fahrzeuge: Navigation, Medien, Telefon und Systeminteraktionen über Touch, Sprache und physische Bedienelemente.',
      es: 'HMI para vehículos Audi conectados: navegación, multimedia, teléfono e interacciones del sistema con táctil, voz y mandos físicos.',
    },
  },
];

// Earlier career in art direction and digital creative work, shown as a compact list.
export const earlier: Role[] = [
  { role: 'Digital Art Director, Creative', company: 'Twice', place: { en: 'Guadalajara, Mexico', de: 'Guadalajara, Mexiko', es: 'Guadalajara, México' }, start: '2014-02', end: '2015-08' },
  { role: 'Head of Digital Media', company: 'C&A México', place: { en: 'Guadalajara, Mexico', de: 'Guadalajara, Mexiko', es: 'Guadalajara, México' }, start: '2013-01', end: '2014-01' },
  { role: 'Creative Director', company: 'katalog', place: { en: 'Guadalajara, Mexico', de: 'Guadalajara, Mexiko', es: 'Guadalajara, México' }, start: '2012-09', end: '2013-01' },
  { role: 'Senior Art Director', company: 'Oveja Negra Lowe', place: { en: 'Mexico City, Mexico', de: 'Mexiko-Stadt, Mexiko', es: 'Ciudad de México, México' }, start: '2011-06', end: '2012-09' },
  { role: 'Senior Art Director', company: 'La Despensa', place: { en: 'Mexico', de: 'Mexiko', es: 'México' }, start: '2011-01', end: '2011-05' },
  { role: 'Art Direction, Creative', company: '9mk Agencia de publicitat', place: { en: 'Andorra', de: 'Andorra', es: 'Andorra' }, start: '2008-01', end: '2010-12' },
  { role: 'Art Director', company: 'Shackleton Group', place: { en: 'Barcelona, Spain', de: 'Barcelona, Spanien', es: 'Barcelona, España' }, start: '2006-01', end: '2007-12' },
];

const months: Record<Lang, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  de: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
};
const to: T = { en: 'to', de: 'bis', es: 'a' };
const present: T = { en: 'present', de: 'heute', es: 'actualidad' };
const nowYm = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; };
const fmt = (ym: string, lang: Lang) => {
  const [y, m] = ym.split('-').map(Number);
  return `${months[lang][m - 1]} ${y}`;
};
// "Mar 2025 to Jun 2026"
export const period = (r: Role, lang: Lang) => `${fmt(r.start, lang)} ${to[lang]} ${r.end ? fmt(r.end, lang) : present[lang]}`;
// "1 yr 4 mos", counted the way LinkedIn does (both months included)
export const duration = (r: Role, lang: Lang) => {
  const [sy, sm] = r.start.split('-').map(Number);
  const [ey, em] = (r.end || nowYm()).split('-').map(Number);
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(total / 12), m = total % 12;
  const w = {
    en: [(n: number) => `${n} yr${n > 1 ? 's' : ''}`, (n: number) => `${n} mo${n > 1 ? 's' : ''}`],
    de: [(n: number) => `${n} J.`, (n: number) => `${n} Mon.`],
    es: [(n: number) => `${n} año${n > 1 ? 's' : ''}`, (n: number) => `${n} mes${n > 1 ? 'es' : ''}`],
  }[lang];
  return [y ? w[0](y) : '', m ? w[1](m) : ''].filter(Boolean).join(' ');
};

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
