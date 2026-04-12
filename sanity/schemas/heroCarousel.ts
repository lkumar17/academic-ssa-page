export default {
  name: 'heroCarousel',
  title: 'Hero Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which this carousel appears',
    },
  ],
};
