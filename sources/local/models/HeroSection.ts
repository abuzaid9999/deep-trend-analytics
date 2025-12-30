import { Model } from '@stackbit/types';

export const HeroSection: Model = {
    name: 'HeroSection',
    type: 'object',
    label: 'Hero Section',
    labelField: 'title',
    fields: [
        {
            name: 'title',
            type: 'string',
            label: 'Title',
            required: true
        },
        {
            name: 'subtitle',
            type: 'string',
            label: 'Subtitle'
        },
        {
            name: 'ctaText',
            type: 'string',
            label: 'CTA Text'
        },
        {
            name: 'ctaUrl',
            type: 'string',
            label: 'CTA URL'
        },
        {
            name: 'backgroundImage',
            type: 'model',
            models: ['BackgroundImage'],
            label: 'Background Image'
        }
    ]
};
