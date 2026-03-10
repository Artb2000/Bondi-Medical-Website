import { defineCollection, z } from 'astro:content';

const heroSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string(),
  primaryCta: z.string().optional(),
  secondaryCta: z.string().optional()
});

const sectionSchema = z.object({
  title: z.string(),
  body: z.string(),
  supportText: z.string().optional()
});

const ctaSchema = z.object({
  title: z.string(),
  body: z.string()
});

const pageSchema = z.object({
  slug: z.string().optional(),
  navLabel: z.string(),
  pageTitle: z.string(),
  metaDescription: z.string(),
  hero: heroSchema,
  sections: z.array(sectionSchema),
  cta: ctaSchema
});

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: pageSchema
  })
};
