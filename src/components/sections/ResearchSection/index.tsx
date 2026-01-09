import { Model } from '@stackbit/types';

export const ResearchSection: Model = {
    type: 'object',
    name: 'ResearchSection',
    label: 'Research Section',
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
            name: 'reports',
            label: 'Research Reports',
            items: {
                type: 'model',
                models: ['ResearchReport']
            }
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
