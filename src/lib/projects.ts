// Case studies live in src/content/projects/<lang>/<slug>.md.
// A missing translation falls back to the English version.
import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from './i18n';

export type Project = CollectionEntry<'projects'> & { slug: string; lang: Lang };

const split = (id: string) => {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
};

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = (await getCollection('projects', (p) => !p.data.draft)).map((p) => ({ ...p, ...split(p.id) }));
  const base = all.filter((p) => p.lang === defaultLang);
  return base
    .map((en) => all.find((p) => p.lang === lang && p.slug === en.slug) ?? en)
    .sort((a, b) => a.data.order - b.data.order);
}
