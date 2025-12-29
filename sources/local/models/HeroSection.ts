import { defineType } from '@stackbit/types';

export const HeroSection = defineType({
  name: 'heroSection',
  type: 'object',
  label: 'Hero Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      required: true
    },
    {
      name: 'subtitle',
      type: 'string',
      label: 'Subtitle'
    },
    {
      name: 'ctaText',
      type: 'string',
      label: 'CTA Text'
    },
    {
      name: 'ctaUrl',
      type: 'string',
      label: 'CTA URL'
    },
    {
      name: 'backgroundImage',
      type: 'image',
      label: 'Background Image'
    }
  ]
});
