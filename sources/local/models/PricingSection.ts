import { defineType } from '@stackbit/types';

export const PricingSection = defineType({
  name: 'pricingSection',
  type: 'object',
  label: 'Pricing',
  labelField: 'title.text',
  fields: [
    {
      type: 'object', // previously type: 'model' with TitleBlock
      name: 'title',
      label: 'Title',
      required: false,
      models: ['TitleBlock'] // leave as reference if needed
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitle',
      required: false,
      default: 'This is a subtitle'
    },
    {
      type: 'array',
      name: 'plans',
      label: 'Plans',
      required: false,
      items: {
        type: 'object',
        models: ['PricingPlan']
      }
    },
    {
      type: 'object', // previously type: 'model' with Badge
      name: 'badge',
      label: 'Badge',
      required: false,
      models: ['Badge']
    },
    {
      type: 'string',
      name: 'elementId',
      label: 'Element ID',
      description: 'The unique ID for an HTML element, must not contain whitespace',
      required: false,
      default: ''
    },
    {
      type: 'enum',
      name: 'colors',
      label: 'Colors',
      description: 'The color theme of the section',
      required: false,
      default: 'bg-light-fg-dark',
      options: [
        { label: 'Light background, dark foreground', value: 'bg-light-fg-dark' },
        { label: 'Neutral background, dark foreground', value: 'bg-neutral-fg-dark' },
        { label: 'Dark background, light foreground', value: 'bg-dark-fg-light' }
      ]
    },
    {
      type: 'object', // previously type: 'model' with BackgroundImage
      name: 'backgroundImage',
      label: 'Background image',
      required: false,
      models: ['BackgroundImage']
    },
    {
      type: 'style',
      name: 'styles',
      label: 'Styles',
      description: 'The styles field is controlled by Netlify Create editor',
      required: false,
      styles: {
        self: {
          margin: ['tw0:96'],
          padding: ['tw0:96'],
          justifyContent: ['flex-start', 'flex-end', 'center']
        },
        subtitle: {
          fontStyle: '*',
          fontWeight: ['400', '500', '700'],
          textDecoration: '*',
          textAlign: '*'
        }
      }
    }
  ],
  thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
  fieldGroups: [
    { name: 'styles', label: 'Styles', icon: 'palette' },
    { name: 'settings', label: 'Settings', icon: 'gear' }
  ]
});

