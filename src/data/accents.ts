// One colour per case: it lights up the case's diagram on the home and its own page.
export const accents: Record<string, string> = {
  'adevinta-sui': '#ff5a4f',
  finora: '#5b7cff',
  smartstamp: '#f2b84b',
  'crealogix-design-hub': '#9b8cff',
  'julius-baer-onboarding': '#46c8d8',
  'coches-net-exploration-hub': '#ff8a3d',
  athleteos: '#2fd6a1',
  'audi-a6-hmi': '#c9d1d9',
  instamusic: '#ff6fb1',
};
export const accentFor = (slug: string) => accents[slug] ?? '#5b7cff';
