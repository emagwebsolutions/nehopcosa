import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'mobile1',
      title: 'Mobile 1',
      type: 'string',
    }),

    defineField({
      name: 'mobile2',
      title: 'Mobile 2',
      type: 'string',
    }),

    defineField({
      name: 'mobile3',
      title: 'Mobile 3',
      type: 'string',
    }),

    defineField({
      name: 'mobile4',
      title: 'Mobile 4',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ]

})
