import { defineType } from '@stackbit/types';

export const PricingSection = defineType({
  name: 'pricingSection',
  type: 'object',
  label: 'Pricing',
  labelField: 'title.text',
  fields: [
    { name: 'title', type: 'object', label: 'Title', models: ['TitleBlock'] },
    { name: 'subtitle', type: 'string', label: 'Subtitle', default: 'This is a subtitle' },
    { name: 'plans', type: 'array', label: 'Plans', items: { type: 'object', models: ['PricingPlan'] } },
    { name: 'badge', type: 'object', label: 'Badge', models: ['Badge'] },
    { name: 'elementId', type: 'string', label: 'Element ID', default: '' },
    { name: 'colors', type: 'enum', label: 'Colors', default: 'bg-light-fg-dark', options: [
      { label: 'Light background, dark foreground', value: 'bg-light-fg-dark' },
      { label: 'Neutral background, dark foreground', value: 'bg-neutral-fg-dark' },
      { label: 'Dark background, light foreground', value: 'bg-dark-fg-light' }
    ] },
    { name: 'backgroundImage', type: 'object', label: 'Background Image', models: ['BackgroundImage'] },
    { name: 'styles', type: 'style', label: 'Styles', styles: {
      self: { margin: ['tw0:96'], padding: ['tw0:96'], justifyContent: ['flex-start','flex-end','center'] },
      subtitle: { fontStyle: '*', fontWeight: ['400','500','700'], textDecoration: '*', textAlign: '*' }
    }}
  ],
  thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
  fieldGroups: [
    { name: 'styles', label: 'Styles', icon: 'palette' },
    { name: 'settings', label: 'Settings', icon: 'gear' }
  ]
});
