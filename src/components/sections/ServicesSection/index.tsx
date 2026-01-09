import { Model } from '@stackbit/types';

export const ServiceItem: Model = {
    type: 'object',
    name: 'ServiceItem',
    label: 'Service Item',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: false
        },
        {
            type: 'image',
            name: 'icon',
            label: 'Icon',
            required: false
        },
        {
            type: 'model',
            name: 'action',
            label: 'Action',
            models: ['Button', 'Link'],
            required: false
        }
    ]
};
