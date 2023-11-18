import {defineType} from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
})
