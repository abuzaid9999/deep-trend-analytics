import { Model } from '@stackbit/types';

export const ServicesSection: Model = {
    type: 'object',
    name: 'ServicesSection',
    label: 'Services Section',
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
            name: 'services',
            label: 'Services',
            items: {
                type: 'model',
                models: ['ServiceItem']
            }
        },
        {
            type: 'model',
            name: 'badge',
            label: 'Badge',
            models: ['Badge']
        },
        {
            type: 'model',
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
                {
                    label: 'Light background, dark foreground',
                    value: 'bg-light-fg-dark'
                },
                {
                    label: 'Neutral background, dark foreground',
                    value: 'bg-neutral-fg-dark'
                },
                {
                    label: 'Dark background, light foreground',
                    value: 'bg-dark-fg-light'
                }
            ],
            group: 'styles'
        }
    ],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ]
};

