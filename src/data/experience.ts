// Career timeline shown on /about.
// TODO: add the years (period) for each role and confirm titles — LinkedIn hides them
// without login, so these come from your case studies and Malt profile only.

export type Role = {
  company: string;
  role: string;
  sector: string;
  period?: string; // e.g. '2023 — 2025'
  note?: string;
};

export const experience: Role[] = [
  {
    company: 'Glencore',
    role: 'Design System Lead / Senior UX Designer',
    sector: 'Commodities trading (CTRM)',
    note: 'Enterprise design system for a mission-critical copper trading platform.',
  },
  {
    company: 'IBM iX Switzerland — for Julius Baer',
    role: 'Lead UX/UI Designer',
    sector: 'Private banking',
    period: '2022',
    note: 'Adaptive onboarding proof of concept for high-net-worth clients.',
  },
  {
    company: 'Crealogix',
    role: 'Senior UX/UI Designer, Design Systems',
    sector: 'Banking SaaS',
    note: 'White-label, multi-tenant design system across Europe and the Middle East.',
  },
  {
    company: 'Webrepublic',
    role: 'Senior UX Consultant',
    sector: 'Digital marketing & SEO',
    note: 'Set up the first UX team inside the SEO division.',
  },
  {
    company: 'Adevinta — Coches.net',
    role: 'Senior UX/UI Designer',
    sector: 'Automotive marketplace',
    note: 'Growth and retention for Spain’s leading car marketplace.',
  },
  {
    company: 'Musiclist (Instamusic)',
    role: 'Product Design Lead',
    sector: 'Consumer music startup',
    period: '2019',
    note: 'Took a mood-based discovery app from idea to MVP in three months.',
  },
  {
    company: 'Audi / Volkswagen Group',
    role: 'Senior UX / HMI Designer',
    sector: 'Automotive',
    period: '2015',
    note: 'Information architecture and interaction model for the connected Audi A6 HMI.',
  },
];

export const education = [
  'Master’s in Advertising and Marketing Strategies',
  'Graphic & Multimedia Design',
  'Trend Analysis & Qualitative Research',
  // TODO: confirm institutions (LinkedIn lists Universitat Ramon Llull).
];

// Public recommendations from LinkedIn. Keep them short; link to the profile for the rest.
export const recommendations = [
  {
    quote:
      'Joan doesn’t just hand off designs — he understands the challenges of the development process, anticipates technical constraints, and works closely with engineers to ensure the final product aligns with the original vision, without compromising usability or performance.',
    name: 'Dzmitry Alifer',
    context: 'worked with Joan on the same project and team for two years',
  },
  {
    quote:
      'Joan is a fantastic designer: curious, strategic, and incredibly organized. He approaches every task with thoughtful structure and creativity, always balancing user needs, development effort and business goals.',
    name: 'Giuseppe Piacenza',
    context: 'colleague',
  },
];
