export default {
  name: 'managementTeamMember',
  title: 'Management Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      //validation: (Rule: any) => Rule.required().min(2),
      description: 'First and last name of the team member',
    },
    {
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      options: {
        list: [
          { title: 'Vice Principal', value: 'vice_principal' },
          { title: 'Academic Head', value: 'academic_head' },
          { title: 'Admin Head', value: 'admin_head' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Position/role of the team member',
    },
    {
      name: 'photo',
      title: 'Professional Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      //validation: (Rule: any) => Rule.required(),
      description: 'Professional photo (ideal size: 400×400px)',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in team roster. Use increments of 10 (10, 20, 30)',
    },
  ],
};
