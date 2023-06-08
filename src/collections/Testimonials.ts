import { CollectionConfig } from 'payload/types'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'company']
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea'
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text'
    },
    {
      name: 'authorTitle',
      label: 'Author Title',
      type: 'text'
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text'
    }
  ]
}

export default Testimonials
