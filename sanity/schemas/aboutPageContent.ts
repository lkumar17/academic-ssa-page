export default {
  name: 'aboutPageContent',
  title: 'About Page Content',
  type: 'document',
  fields: [
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Value Description',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
      description: 'Core values that define the academy',
    },
    {
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Title for the vision section (e.g., "Leading the Future of Education")',
    },
    {
      name: 'visionContent',
      title: 'Vision Statement',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'Full vision statement content',
    },
    {
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Title for the mission section (e.g., "Empowering Every Student")',
    },
    {
      name: 'missionContent',
      title: 'Mission Statement',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'Full mission statement content',
    },
  ],
};
