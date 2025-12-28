import { defineDocument, defineField } from '@stackbit/types';

export const HeroSection = defineDocument({
    name: 'HeroSection',
    label: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            label: 'Title',
            required: true
        }),
        defineField({
            name: 'subtitle',
            type: 'string',
            label: 'Subtitle'
        }),
        defineField({
            name: 'ctaText',
            type: 'string',
            label: 'CTA Text'
        }),
        defineField({
            name: 'ctaUrl',
            type: 'string',
            label: 'CTA URL'
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            label: 'Background Image'
        })
    ]
});
