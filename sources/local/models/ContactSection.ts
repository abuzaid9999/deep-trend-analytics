import { defineDocument, defineField } from '@stackbit/types';

export const ContactSection = defineDocument({
    name: 'Contact Section',
    label: 'Contact Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            label: 'Title'
        }),
        defineField({
            name: 'email',
            type: 'string',
            label: 'Email'
        })
    ]
});
