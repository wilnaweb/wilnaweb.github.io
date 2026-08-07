import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  navigation: z.string().optional(),
  slug: z.string(),
  description: z.string(),
  language: z.enum(['en', 'pt-br']),
  status: z.enum(['draft', 'approved']).optional(),
  lastUpdated: z.coerce.date().optional(),
  heroEyebrow: z.string().optional(),
  heroSubtitle: z.string().optional(),
  heroDescription: z.string().optional(),
  ctaPrimaryLabel: z.string().optional(),
  ctaPrimaryHref: z.string().optional(),
  ctaSecondaryLabel: z.string().optional(),
  ctaSecondaryHref: z.string().optional(),
  trustedHeading: z.string().optional(),
  trustedParagraphs: z.array(z.string()).optional(),
  caseCardCtaLabel: z.string().optional(),
  highlightsHeading: z.string().optional(),
  highlights: z
    .array(
      z.object({
        value: z.string(),
        label: z.string()
      })
    )
    .optional(),
  featuredExpertiseHeading: z.string().optional(),
  featuredExpertise: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.enum(['adobe', 'architecture', 'dxp', 'cloud', 'leadership', 'ai']).optional()
      })
    )
    .optional(),
  featuredCaseStudiesHeading: z.string().optional(),
  featuredCaseStudies: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        role: z.string(),
        href: z.string(),
        ctaLabel: z.string().optional()
      })
    )
    .optional(),
  timelineIntroEyebrow: z.string().optional(),
  timelineIntroText: z.string().optional(),
  timelineHeading: z.string().optional(),
  timeline: z
    .array(
      z.object({
        company: z.string(),
        role: z.string(),
        period: z.string(),
        summary: z.array(z.string()),
        sections: z
          .array(
            z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  label: z.string(),
                  href: z.string().optional()
                })
              )
            })
          )
          .optional()
      })
    )
    .optional(),
  quickLinks: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
        ctaLabel: z.string(),
        target: z.enum(['_self', '_blank']).optional()
      })
    )
    .optional()
});

const pages = defineCollection({
  loader: glob({
    pattern: '{en,pt-br}/*.md',
    base: './docs/content',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  }),
  schema: baseSchema
});

const caseStudies = defineCollection({
  loader: glob({
    pattern: '{en,pt-br}/case-studies/*.md',
    base: './docs/content',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  }),
  schema: baseSchema
});

export const collections = {
  pages,
  caseStudies
};