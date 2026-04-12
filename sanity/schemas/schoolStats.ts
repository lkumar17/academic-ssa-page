export default {
  name: 'schoolStats',
  title: 'School Statistics',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Statistic Value',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(20),
      description: 'The numeric or text value (e.g., "20+", "2", "90%")',
    },
    {
      name: 'label',
      title: 'Statistic Label',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(50),
      description: 'Human-readable label (e.g., "Years of Excellence")',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Use increments of 10 (10, 20, 30)',
    },
  ],
};
