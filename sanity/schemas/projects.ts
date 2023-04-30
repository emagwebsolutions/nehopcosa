import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the post',
      validation: (Rule) =>
        Rule.max(150).warning('The excerpt should be a maximum of 150 characters.'),
    }),
  ],
})
