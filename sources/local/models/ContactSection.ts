import { defineType } from '@stackbit/types';

export const ContactSection = defineType({
  name: 'contactSection',
  type: 'object',
  label: 'Contact',
  fields: [
    { name: 'title', type: 'string', label: 'Title', required: true },
    { name: 'subtitle', type: 'string', label: 'Subtitle' },
    { name: 'formId', type: 'string', label: 'Form ID', required: true },
    { name: 'backgroundImage', type: 'image', label: 'Background Image' }
  ]
});
