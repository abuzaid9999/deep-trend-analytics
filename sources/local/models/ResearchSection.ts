import { defineDocument, defineField } from '@stackbit/types';

export const ResearchSection = defineDocument({
    name: 'ResearchSection',
    label: 'Research Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            label: 'Title'
        }),
        defineField({
            name: 'content',
            type: 'markdown',
            label: 'Content'
        })
    ]
});
