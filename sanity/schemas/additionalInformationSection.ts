import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'additionalInformationSection',
  title: 'Additional Information Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
    },
    prepare: (selection) => ({
      title: selection.title,
      subtitle: selection.subtitle?.substring(0, 50) + '...',
    }),
  },
});
