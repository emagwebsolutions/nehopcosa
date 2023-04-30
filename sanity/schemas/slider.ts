import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ]

})
