import { CollectionConfig } from 'payload/types'

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
    }
  ]
}

export default Categories
