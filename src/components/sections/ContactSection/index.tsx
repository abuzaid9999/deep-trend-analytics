import { Model } from '@stackbit/types';

export const ContactSection: Model = {
    type: 'object',
    name: 'ContactSection',
    label: 'Contact Section',
    labelField: 'title.text',
    fields: [
        {
            type: 'model',
            name: 'title',
            label: 'Title',
            required: false,
            models: ['TitleBlock']
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: false
        },
        {
            type: 'model',
            name: 'form',
            label: 'Form',
            required: true,
            models: ['FormBlock']
        },
        {    type: 'model',
            name: 'badge',
            label: 'Badge',
            required: false,
            models: ['Badge']
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'Unique HTML ID (no spaces)',
            required: false,
            group: 'settings'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            required: false,
            default: 'bg-light-fg-dark',
            options: [
                { label: 'Light background, dark foreground', value: 'bg-light-fg-dark' },
                { label: 'Neutral background, dark foreground', value: 'bg-neutral-fg-dark' },
                { label: 'Dark background, light foreground', value: 'bg-dark-fg-light' }
            ],
            group: 'styles'
        },
        {
            type: 'model',            
            name: 'backgroundImage',
            label: 'Background Image',
            required: false,
            models: ['BackgroundImage'],
            group: 'styles'
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            required: false
        }
    ],
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/contact.png',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
