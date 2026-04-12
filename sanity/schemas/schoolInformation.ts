import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'schoolInformation',
  title: 'School Information',
  type: 'document',
  fields: [
    defineField({
      name: 'schoolName',
      title: 'School Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'principalName',
      title: 'Principal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'establishedYear',
      title: 'Established Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'board',
      title: 'Board',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'schoolName',
      subtitle: 'email',
    },
  },
});
