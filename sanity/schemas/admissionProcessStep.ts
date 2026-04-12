import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'admissionProcessStep',
  title: 'Admission Process Step',
  type: 'document',
  fields: [
    defineField({
      name: 'step',
      title: 'Step Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Step Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'step',
    },
    prepare: (selection) => ({
      title: `Step ${selection.media}: ${selection.title}`,
      subtitle: selection.subtitle,
    }),
  },
});
