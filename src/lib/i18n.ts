// Languages and interface text. English lives at "/", German at "/de/", Spanish at "/es/".
// German follows Swiss spelling (ss instead of ß).
import { url } from './url';

export const langs = ['en', 'de', 'es'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'en';

export const langNames: Record<Lang, string> = { en: 'English', de: 'Deutsch', es: 'Español' };
export const locales: Record<Lang, string> = { en: 'en-GB', de: 'de-CH', es: 'es-ES' };

// Build a link for a language-neutral path such as "/work/glencore-ctrm/".
export function href(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return url(lang === defaultLang ? clean : `/${lang}${clean}`);
}

const en = {
  nav: { work: 'Work', about: 'About', writing: 'Writing', contact: 'Contact', language: 'Language' },
  skip: 'Skip to content',
  footer: {
    title: 'Have a complex product that needs to feel simple?',
    email: 'Email',
    call: 'Book a 20-minute call',
    cv: 'Download CV (PDF)',
    elsewhere: 'Elsewhere',
  },
  home: {
    title: 'I design systems and products for places where mistakes are expensive.',
    sub: 'Senior Product Designer with 16 years in private banking, trading platforms, marketplaces and cars. I lead design systems and design the products built on them, from research to measurable results.',
    seeWork: 'See selected work',
    emailMe: 'Email me',
    clients: 'Clients and employers',
    selected: 'Selected work',
    count: (n: number) => `${n} case studies`,
    read: (t: string) => `Read the ${t} case study`,
    side: 'Side project',
    how: 'How I work',
    more: 'More about me',
    seenIn: 'Seen in',
    and: 'and',
    writing: 'Writing',
    allArticles: 'All articles',
    practices: [
      {
        title: 'Design systems as products',
        text: 'Tokens, components, documentation and governance that teams adopt because they make work easier, not because they are told to.',
      },
      {
        title: 'Trust in regulated products',
        text: 'Banking, trading and in-car interfaces where an error costs money, compliance or safety. Clarity and predictability come before novelty.',
      },
      {
        title: 'Outcomes you can measure',
        text: 'Analytics before design, hypotheses before screens, and A/B tests before claims. I design for the metric the business actually cares about.',
      },
    ],
    layers: [
      { name: 'Product', note: 'Flows people trust' },
      { name: 'System', note: 'Components and governance' },
      { name: 'Foundations', note: 'Tokens and accessibility' },
    ],
    layersLabel: 'Three stacked layers: product flows on top of a component system on top of foundations and tokens.',
  },
  cs: {
    allWork: 'All work',
    inShort: 'In short',
    tldr: ['Problem', 'What I did', 'Result'],
    facts: { client: 'Client', role: 'Role', team: 'Team', duration: 'Duration', year: 'Year', sector: 'Sector', tools: 'Tools', link: 'Link' },
    impact: 'Impact',
    related: 'Related writing',
    next: 'Next case study',
    overview: 'Overview',
  },
  about: {
    title: 'About',
    hi: 'Hi, I’m Joan.',
    paras: [
      'I’m a Senior Product Designer based in Zug, Switzerland. For 16 years I’ve designed digital products where clarity is essential: private banking, commodity trading, banking software, car marketplaces and in-car interfaces.',
      'These days I mostly lead design systems and design the products that run on them. I like the parts other people skip: naming tokens so engineers and designers mean the same thing, writing documentation people actually read, and setting up the governance that keeps a system alive after launch.',
      'I started in graphic and multimedia design, which gave me a visual foundation and an eye for detail. Curiosity about how people think pulled me into UX and product. A master’s in advertising and marketing strategy, plus training in trend analysis and qualitative research, taught me to connect design decisions to business ones.',
      'For the last four years I’ve used AI in my own workflow for research synthesis, documentation and prototyping, and I build with it too, as in {athleteos}. I’m interested in where it adds real value and where a person should step in.',
      'Outside work I write about design systems, research and accessibility, follow how technology and mobility shape behaviour, and spend more time than I should analysing my own training data.',
    ],
    experience: 'Experience',
    cv: 'Download CV (PDF)',
    colleagues: 'What colleagues say',
    allRecs: 'All 23 recommendations on LinkedIn',
    education: 'Education',
    languages: 'Languages',
    recognition: 'Recognition',
    award: 'First place, Google Spain AMP Hackathon (2018)',
    meta: 'Joan Martí Díez, Senior Product Designer in Zug, Switzerland. 16 years designing systems and products for banking, trading, marketplaces and automotive.',
  },
  writing: {
    title: 'Writing',
    lede: 'Notes from real projects on design systems, research and designing for trust. I publish on',
    readOn: (s: string) => `Read on ${s}`,
    inEnglish: '',
    meta: 'Articles by Joan Martí Díez on design systems, UX research, accessibility and product design in regulated industries.',
  },
  notFound: {
    title: 'This page doesn’t exist.',
    body: 'It may have moved when the portfolio was rebuilt. Start from the {home} or go straight to {work}.',
    home: 'home page',
    work: 'selected work',
  },
};

type Dict = typeof en;

const de: Dict = {
  nav: { work: 'Projekte', about: 'Über mich', writing: 'Artikel', contact: 'Kontakt', language: 'Sprache' },
  skip: 'Zum Inhalt springen',
  footer: {
    title: 'Ein komplexes Produkt, das sich einfach anfühlen soll?',
    email: 'E-Mail',
    call: 'Gespräch von 20 Minuten buchen',
    cv: 'Lebenslauf herunterladen (PDF)',
    elsewhere: 'Weitere Profile',
  },
  home: {
    title: 'Ich gestalte Systeme und Produkte für Bereiche, in denen Fehler teuer sind.',
    sub: 'Senior Product Designer mit 16 Jahren Erfahrung in Private Banking, Handelsplattformen, Marktplätzen und der Automobilbranche. Ich leite Designsysteme und gestalte die Produkte, die darauf aufbauen, von der Nutzerforschung bis zu messbaren Ergebnissen.',
    seeWork: 'Ausgewählte Projekte ansehen',
    emailMe: 'E-Mail schreiben',
    clients: 'Kunden und Arbeitgeber',
    selected: 'Ausgewählte Projekte',
    count: (n: number) => `${n} Fallstudien`,
    read: (t: string) => `Fallstudie ${t} lesen`,
    side: 'Eigenes Projekt',
    how: 'So arbeite ich',
    more: 'Mehr über mich',
    seenIn: 'Zu sehen bei',
    and: 'und',
    writing: 'Artikel',
    allArticles: 'Alle Artikel',
    practices: [
      {
        title: 'Designsysteme als Produkte',
        text: 'Tokens, Komponenten, Dokumentation und Governance, die Teams übernehmen, weil sie ihnen die Arbeit erleichtern, und nicht, weil es jemand vorschreibt.',
      },
      {
        title: 'Vertrauen in regulierten Produkten',
        text: 'Banking, Handel und Fahrzeugschnittstellen, bei denen ein Fehler Geld, Compliance oder Sicherheit kostet. Klarheit und Vorhersehbarkeit kommen vor Neuheit.',
      },
      {
        title: 'Messbare Ergebnisse',
        text: 'Erst Daten, dann Design. Erst Hypothesen, dann Screens. Erst A/B-Tests, dann Behauptungen. Ich gestalte für die Kennzahl, die für das Geschäft wirklich zählt.',
      },
    ],
    layers: [
      { name: 'Produkt', note: 'Abläufe, denen man vertraut' },
      { name: 'System', note: 'Komponenten und Governance' },
      { name: 'Grundlagen', note: 'Tokens und Barrierefreiheit' },
    ],
    layersLabel: 'Drei Ebenen übereinander: Produktabläufe auf einem Komponentensystem auf Grundlagen und Tokens.',
  },
  cs: {
    allWork: 'Alle Projekte',
    inShort: 'Kurz gesagt',
    tldr: ['Problem', 'Was ich tat', 'Ergebnis'],
    facts: { client: 'Kunde', role: 'Rolle', team: 'Team', duration: 'Dauer', year: 'Jahr', sector: 'Branche', tools: 'Werkzeuge', link: 'Link' },
    impact: 'Wirkung',
    related: 'Passende Artikel',
    next: 'Nächste Fallstudie',
    overview: 'Überblick',
  },
  about: {
    title: 'Über mich',
    hi: 'Hallo, ich bin Joan.',
    paras: [
      'Ich bin Senior Product Designer in Zug. Seit 16 Jahren gestalte ich digitale Produkte, bei denen Klarheit entscheidend ist: Private Banking, Rohstoffhandel, Banking-Software, Automarktplätze und Fahrzeugschnittstellen.',
      'Heute leite ich vor allem Designsysteme und gestalte die Produkte, die darauf laufen. Mich reizen die Teile, die andere gern überspringen: Tokens so benennen, dass Entwicklung und Design dasselbe meinen, Dokumentation schreiben, die tatsächlich gelesen wird, und eine Governance aufbauen, die ein System nach dem Launch am Leben hält.',
      'Angefangen habe ich im Grafik- und Multimediadesign. Das gab mir ein visuelles Fundament und ein Auge fürs Detail. Die Neugier darauf, wie Menschen denken, führte mich zu UX und Produktdesign. Ein Master in Werbe- und Marketingstrategie sowie eine Ausbildung in Trendanalyse und qualitativer Forschung haben mich gelehrt, Designentscheide mit Geschäftsentscheiden zu verbinden.',
      'Seit vier Jahren nutze ich KI in meiner eigenen Arbeit für die Auswertung von Interviews, Dokumentation und Prototyping, und ich entwickle auch damit, etwa bei {athleteos}. Mich interessiert, wo sie echten Mehrwert schafft und wo ein Mensch übernehmen sollte.',
      'Neben der Arbeit schreibe ich über Designsysteme, Forschung und Barrierefreiheit, verfolge, wie Technologie und Mobilität unser Verhalten prägen, und analysiere öfter, als mir lieb ist, meine eigenen Trainingsdaten.',
    ],
    experience: 'Berufserfahrung',
    cv: 'Lebenslauf herunterladen (PDF)',
    colleagues: 'Was Kolleginnen und Kollegen sagen',
    allRecs: 'Alle 23 Empfehlungen auf LinkedIn',
    education: 'Ausbildung',
    languages: 'Sprachen',
    recognition: 'Auszeichnungen',
    award: 'Erster Platz, Google Spain AMP Hackathon (2018)',
    meta: 'Joan Martí Díez, Senior Product Designer in Zug. 16 Jahre Erfahrung mit Systemen und Produkten für Banking, Handel, Marktplätze und Automobil.',
  },
  writing: {
    title: 'Artikel',
    lede: 'Erfahrungen aus echten Projekten zu Designsystemen, Forschung und Design für Vertrauen. Ich veröffentliche auf',
    readOn: (s: string) => `Auf ${s} lesen`,
    inEnglish: 'Artikel auf Englisch',
    meta: 'Artikel von Joan Martí Díez über Designsysteme, UX-Forschung, Barrierefreiheit und Produktdesign in regulierten Branchen.',
  },
  notFound: {
    title: 'Diese Seite gibt es nicht.',
    body: 'Sie wurde beim Umbau des Portfolios vielleicht verschoben. Starten Sie auf der {home} oder gehen Sie direkt zu den {work}.',
    home: 'Startseite',
    work: 'ausgewählten Projekten',
  },
};

const es: Dict = {
  nav: { work: 'Proyectos', about: 'Sobre mí', writing: 'Artículos', contact: 'Contacto', language: 'Idioma' },
  skip: 'Saltar al contenido',
  footer: {
    title: '¿Tienes un producto complejo que debería sentirse sencillo?',
    email: 'Escribir a',
    call: 'Reservar una llamada de 20 minutos',
    cv: 'Descargar CV (PDF)',
    elsewhere: 'En otras webs',
  },
  home: {
    title: 'Diseño sistemas y productos para entornos donde un error sale caro.',
    sub: 'Senior Product Designer con 16 años de experiencia en banca privada, plataformas de trading, marketplaces y automoción. Lidero design systems y diseño los productos que se construyen sobre ellos, desde la investigación hasta resultados medibles.',
    seeWork: 'Ver proyectos',
    emailMe: 'Escríbeme',
    clients: 'Clientes y empresas',
    selected: 'Proyectos seleccionados',
    count: (n: number) => `${n} casos de estudio`,
    read: (t: string) => `Leer el caso de ${t}`,
    side: 'Proyecto personal',
    how: 'Cómo trabajo',
    more: 'Más sobre mí',
    seenIn: 'Se ve en',
    and: 'y',
    writing: 'Artículos',
    allArticles: 'Todos los artículos',
    practices: [
      {
        title: 'Design systems como productos',
        text: 'Tokens, componentes, documentación y gobernanza que los equipos adoptan porque les facilitan el trabajo, no porque se lo impongan.',
      },
      {
        title: 'Confianza en productos regulados',
        text: 'Banca, trading e interfaces de coche, donde un error cuesta dinero, cumplimiento normativo o seguridad. La claridad y la previsibilidad van antes que la novedad.',
      },
      {
        title: 'Resultados medibles',
        text: 'Primero los datos y después el diseño, primero las hipótesis y después las pantallas, primero los tests A/B y después las conclusiones. Diseño para la métrica que de verdad le importa al negocio.',
      },
    ],
    layers: [
      { name: 'Producto', note: 'Flujos que generan confianza' },
      { name: 'Sistema', note: 'Componentes y gobernanza' },
      { name: 'Fundamentos', note: 'Tokens y accesibilidad' },
    ],
    layersLabel: 'Tres capas apiladas: flujos de producto sobre un sistema de componentes, sobre fundamentos y tokens.',
  },
  cs: {
    allWork: 'Todos los proyectos',
    inShort: 'En resumen',
    tldr: ['Problema', 'Qué hice', 'Resultado'],
    facts: { client: 'Cliente', role: 'Rol', team: 'Equipo', duration: 'Duración', year: 'Año', sector: 'Sector', tools: 'Herramientas', link: 'Enlace' },
    impact: 'Impacto',
    related: 'Artículos relacionados',
    next: 'Siguiente caso',
    overview: 'Resumen',
  },
  about: {
    title: 'Sobre mí',
    hi: 'Hola, soy Joan.',
    paras: [
      'Soy Senior Product Designer y vivo en Zug, Suiza. Llevo 16 años diseñando productos digitales donde la claridad es imprescindible: banca privada, trading de materias primas, software bancario, marketplaces de coches e interfaces para el coche.',
      'Hoy lidero sobre todo design systems y diseño los productos que funcionan sobre ellos. Me gustan las partes que otros se saltan: nombrar los tokens para que diseño y desarrollo hablen el mismo idioma, escribir documentación que la gente realmente lee y montar la gobernanza que mantiene vivo un sistema después del lanzamiento.',
      'Empecé en el diseño gráfico y multimedia, que me dio una base visual y ojo para el detalle. La curiosidad por cómo piensan las personas me llevó a la UX y al producto. Un máster en estrategias de publicidad y marketing, junto con formación en análisis de tendencias e investigación cualitativa, me enseñó a conectar las decisiones de diseño con las de negocio.',
      'Desde hace cuatro años uso la IA en mi propio trabajo para sintetizar investigación, documentar y prototipar, y también construyo con ella, como en {athleteos}. Me interesa saber dónde aporta valor de verdad y cuándo tiene que intervenir una persona.',
      'Fuera del trabajo escribo sobre design systems, investigación y accesibilidad, sigo cómo la tecnología y la movilidad cambian nuestro comportamiento, y paso más tiempo del que debería analizando mis datos de entrenamiento.',
    ],
    experience: 'Experiencia',
    cv: 'Descargar CV (PDF)',
    colleagues: 'Lo que dicen mis compañeros',
    allRecs: 'Las 23 recomendaciones en LinkedIn',
    education: 'Formación',
    languages: 'Idiomas',
    recognition: 'Reconocimientos',
    award: 'Primer puesto, Google Spain AMP Hackathon (2018)',
    meta: 'Joan Martí Díez, Senior Product Designer en Zug, Suiza. 16 años diseñando sistemas y productos para banca, trading, marketplaces y automoción.',
  },
  writing: {
    title: 'Artículos',
    lede: 'Aprendizajes de proyectos reales sobre design systems, investigación y diseño para la confianza. Publico en',
    readOn: (s: string) => `Leer en ${s}`,
    inEnglish: 'Artículo en inglés',
    meta: 'Artículos de Joan Martí Díez sobre design systems, investigación UX, accesibilidad y diseño de producto en sectores regulados.',
  },
  notFound: {
    title: 'Esta página no existe.',
    body: 'Puede que se haya movido al rehacer el portfolio. Empieza desde la {home} o ve directamente a los {work}.',
    home: 'página de inicio',
    work: 'proyectos seleccionados',
  },
};

export const ui: Record<Lang, Dict> = { en, de, es };
