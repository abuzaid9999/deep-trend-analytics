import { Model } from '@stackbit/types';

export const PricingSection: Model = {
    type: 'object',
    name: 'PricingSection',
    label: 'Pricing Section',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle'
        },
        {
            type: 'list',
            name: 'plans',
            label: 'Pricing Plans',
            items: {
                type: 'model',
                models: ['PricingPlan']
            }
        },
        {   type: 'model',
            name: 'backgroundImage',
            label: 'Background Image',
            models: ['BackgroundImage'],
            group: 'styles'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            default: 'bg-light-fg-dark',
            options: [
                { label: 'Light', value: 'bg-light-fg-dark' },
                { label: 'Neutral', value: 'bg-neutral-fg-dark' },
                { label: 'Dark', value: 'bg-dark-fg-light' }
            ],
            group: 'styles'
        }
    ],
    fieldGroups: [
        { name: 'styles', label: 'Styles', icon: 'palette' }
    ]
};
