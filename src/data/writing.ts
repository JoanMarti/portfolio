// Articles published elsewhere (Medium, Substack, LinkedIn).
// The portfolio lists them and links to the original, so the canonical copy stays on the platform.
// To add one: copy an entry, newest first.
// TODO: replace the generic Medium links with each article's exact URL, and add dates.

export type Article = {
  title: string;
  excerpt: string;
  source: 'Medium' | 'Substack' | 'LinkedIn';
  url: string;
  date?: string; // 'YYYY-MM-DD'
  topic: string;
  relatedProject?: string; // project slug, shows the article on that case study
};

export const writing: Article[] = [
  {
    title: 'Designing Access to Information',
    excerpt:
      'What Switzerland and Spain can teach us about the future of digital news experiences — discovery, paywalls, personalisation and the move from design systems to experience systems.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joan-marti-productdesigner/recent-activity/articles/',
    date: '2026-09-08',
    topic: 'Information architecture',
  },
  {
    title: 'Tell Me What Kind of Company You Are, and I’ll Tell You What Design System You Need',
    excerpt:
      'Not every company needs a complex design system, and forcing one where it doesn’t belong can be a strategic mistake.',
    source: 'Medium',
    url: 'https://medium.com/@campecha',
    topic: 'Design systems',
    relatedProject: 'crealogix-design-hub',
  },
  {
    title: 'UX Research in Private Banking',
    excerpt:
      'Private banking doesn’t struggle with technology. It struggles with truly knowing its users — and designing without real feedback is a luxury it can no longer afford.',
    source: 'Medium',
    url: 'https://medium.com/@campecha',
    topic: 'Research',
    relatedProject: 'julius-baer-onboarding',
  },
  {
    title: 'How to Run a Focus Group (Without Losing Your Mind)',
    excerpt: 'What a focus group is good for, what it isn’t, and how to run one that produces decisions.',
    source: 'Medium',
    url: 'https://medium.com/@campecha',
    topic: 'Research',
  },
];
