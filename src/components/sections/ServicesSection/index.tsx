import { defineType } from '@stackbit/types';

export const ServicesSection = defineType({
  name: 'servicesSection',
  type: 'object',
  label: 'Services',
  fields: [
    { name: 'title', type: 'string', label: 'Title', required: true },
    { name: 'subtitle', type: 'string', label: 'Subtitle' },
    { name: 'services', type: 'array', label: 'Services', items: { type: 'object', models: ['ServiceItem'] } },
    { name: 'backgroundImage', type: 'image', label: 'Background Image' }
  ]
});
