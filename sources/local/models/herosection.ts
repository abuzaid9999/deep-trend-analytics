import { defineModel } from '@stackbit/types';

export const HeroSection = defineModel({
  name: 'HeroSection',
  type: 'object',
  label: 'Hero Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true
    },
    {
      name: 'subtitle',
      type: 'string'
    },
    {
      name: 'primaryButton',
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'url', type: 'string' }
      ]
    },
    {
      name: 'secondaryButton',
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'url', type: 'string' }
      ]
    }
  ]
});
