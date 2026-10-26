import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per case study in src/content/projects/.
// The front matter below is the "fact sheet"; the Markdown body is the story.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), // short name, e.g. "Glencore CTRM"
    headline: z.string(), // one-line outcome-led title
    summary: z.string(), // 1–2 sentences for cards and meta description
    client: z.string(),
    sector: z.string(),
    year: z.string(),
    role: z.string(),
    team: z.string().optional(),
    duration: z.string().optional(),
    tools: z.array(z.string()).default([]),
    // Which diagram cover to draw (see src/components/ProjectCover.astro).
    cover: z.enum(['layers', 'tenants', 'branching', 'loop', 'hmi', 'mood', 'signals']),
    featured: z.boolean().default(false),
    order: z.number(), // lower = higher on the page
    kind: z.enum(['client', 'side-project']).default('client'),
    tldr: z.array(z.string()).length(3), // problem, what I did, result
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          method: z.string().optional(), // how it was measured — makes numbers credible
        }),
      )
      .default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
