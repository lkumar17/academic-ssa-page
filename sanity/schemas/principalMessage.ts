export default {
  name: 'principalMessage',
  title: 'Principal Message',
  type: 'document',
  fields: [
    {
      name: 'principalName',
      title: 'Principal Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'First and/or full name of the principal',
    },
    {
      name: 'principalQuote',
      title: 'Principal Quote',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Inspirational quote from the principal',
    },
    {
      name: 'principalMessage',
      title: 'Principal Message',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'Full message/speech from the principal',
    },
    {
      name: 'principalPhoto',
      title: 'Principal Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      //validation: (Rule: any) => Rule.required(),
      description: 'Professional photo of the principal (ideal size: 400×400px)',
    },
  ],
};
