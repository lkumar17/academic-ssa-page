import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'requiredDocument',
  title: 'Required Document',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Document Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Document Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Document File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      //validation: (Rule) => Rule.required(),
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
      title: 'name',
      subtitle: 'description',
    },
  },
});
