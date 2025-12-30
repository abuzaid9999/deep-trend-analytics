import { Model } from '@stackbit/types';

export const ServicesSection: Model = {
    name: 'ServicesSection',
    type: 'object',
    label: 'Services Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            label: 'Title'
        },
        {
            name: 'items',
            type: 'list',
            label: 'Services',
            items: {
                type: 'string'
            }
        }
    ]
};

