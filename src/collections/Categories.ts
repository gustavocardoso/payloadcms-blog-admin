import { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'

const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    slug()
  ]
}

export default Categories
