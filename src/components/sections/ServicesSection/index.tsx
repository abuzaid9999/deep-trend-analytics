import { Model } from '@stackbit/types';

export const ServicesSection: Model = {
  name: 'ServicesSection',
  label: 'Services Section',
  type: 'object',
  labelField: 'title',
  fields: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      required: true
    },
    {
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          fields: [
            { name: 'name', type: 'string', label: 'Name' },
            { name: 'description', type: 'string', label: 'Description' }
          ]
        }
      ]
    }
  ]
};
