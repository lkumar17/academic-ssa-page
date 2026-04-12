import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'admissionClassInfo',
  title: 'Admission Class Info',
  type: 'document',
  fields: [
    defineField({
      name: 'grade',
      title: 'Grade/Class',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'criteria',
      title: 'Eligibility Criteria',
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
      title: 'grade',
      subtitle: 'criteria',
    },
  },
});
