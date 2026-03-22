export default {
  name: 'campusInfo',
  title: 'Campus Info',
  type: 'document',
  fields: [
    {
      name: 'branchName',
      title: 'Branch Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().custom((email: string) => {
          const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          return isValid || 'Invalid email format';
        }),
    },
    {
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    },
  ],
};
