import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'admissionImportantDate',
  title: 'Admission Important Date',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      title: 'Event Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
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
      title: 'event',
      subtitle: 'date',
    },
  },
});
