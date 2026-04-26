export default {
  name: 'chatbotFaq',
  title: 'Chatbot FAQ',
  type: 'document',
  icon: () => '💬',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Helps organize FAQs by topic',
      options: {
        list: [
          { title: 'School Timings', value: 'timings' },
          { title: 'Admissions', value: 'admissions' },
          { title: 'Fees & Payments', value: 'fees' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'Academics', value: 'academics' },
          { title: 'Transport', value: 'transport' },
          { title: 'Contact Information', value: 'contact' },
          { title: 'General Questions', value: 'general' }
        ],
        layout: 'dropdown'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The question students/parents might ask (e.g., "What are the school timings?")',
      validation: (Rule: any) => Rule.required().max(200)
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      description: 'Clear, concise answer. Keep it 2-3 sentences for best results.',
      validation: (Rule: any) => Rule.required().max(500)
    },
    {
      name: 'keywords',
      title: 'Keywords (Optional)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Related terms that might help match this answer (e.g., "timing", "schedule", "hours")',
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this FAQ appears in Studio. Use increments of 10 (10, 20, 30) for flexibility',
      initialValue: 10,
      validation: (Rule: any) => Rule.min(0)
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Enable/disable this FAQ without deleting it',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
      active: 'isActive'
    },
    prepare(selection: any) {
      const { title, subtitle, active } = selection;
      return {
        title,
        subtitle: `${subtitle} ${!active ? '(Inactive)' : ''}`,
        media: () => '💬'
      };
    }
  },
  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }]
    },
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
};
