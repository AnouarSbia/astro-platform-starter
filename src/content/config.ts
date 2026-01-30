import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('Anouar Sbia'),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default(['SEO']),
        draft: z.boolean().default(false),
    }),
});

const caseStudies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        client: z.string(),
        industry: z.string(),
        websiteUrl: z.string().url().optional(),
        duration: z.string(),
        date: z.coerce.date(),
        heroImage: z.string(),
        clientLogo: z.string().optional(),
        results: z.array(
            z.object({
                metric: z.string(),
                value: z.string(),
                description: z.string().optional(),
            })
        ),
        testimonial: z.object({
            quote: z.string(),
            author: z.string(),
            position: z.string(),
        }),
        challenges: z.string(),
        solutions: z.string(),
        draft: z.boolean().default(false),
    }),
});

const services = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.enum(['chart', 'search', 'code', 'tools', 'rocket']),
        order: z.number().default(1),
        basePrice: z.string().optional(),
        features: z.array(z.string()),
        ctaText: z.string().default('En savoir plus'),
        ctaLink: z.string().default('/contact'),
        published: z.boolean().default(true),
    }),
});

export const collections = {
    blog,
    'case-studies': caseStudies,
    services,
};
