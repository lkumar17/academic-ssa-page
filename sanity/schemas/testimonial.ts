export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Parent', value: 'parent' },
          { title: 'Student', value: 'student' },
          { title: 'Staff', value: 'staff' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'grade',
      title: 'Grade / Designation',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
  ],
};
