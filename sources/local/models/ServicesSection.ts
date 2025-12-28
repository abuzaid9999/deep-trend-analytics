import { defineDocument, defineField } from '@stackbit/types';

export const ServicesSection = defineDocument({
    name: 'ServicesSection',
    label: 'Services Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            label: 'Title'
        }),
        defineField({
            name: 'services',
            type: 'list',
            label: 'Services',
            items: {
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', label: 'Service Title' },
                    { name: 'description', type: 'string', label: 'Description' }
                ]
            }
        })
    ]
});
