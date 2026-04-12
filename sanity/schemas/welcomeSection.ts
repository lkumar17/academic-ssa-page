export default {
  name: 'welcomeSection',
  title: 'Welcome Section',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Small uppercase label above the heading (e.g., "Welcome to Our Academy")',
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Large main heading text (e.g., "Building Leaders, Inspiring Minds")',
    },
    {
      name: 'paragraphs',
      title: 'Content Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule: any) => Rule.required().min(1),
      description: 'Array of paragraph texts for the welcome section',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      default: true,
      description: 'Enable or disable this welcome section',
    },
  ],
};
