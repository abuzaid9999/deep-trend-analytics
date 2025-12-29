import { defineType } from '@stackbit/types';

export const ResearchSection = defineType({
  name: 'researchSection',
  type: 'object',
  label: 'Research',
  fields: [
    { name: 'title', type: 'string', label: 'Title', required: true },
    { name: 'subtitle', type: 'string', label: 'Subtitle' },
    { name: 'reports', type: 'array', label: 'Reports', items: { type: 'object', models: ['ResearchReport'] } },
    { name: 'ctaText', type: 'string', label: 'CTA Text' },
    { name: 'ctaUrl', type: 'string', label: 'CTA URL' }
  ]
});
