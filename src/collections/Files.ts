import { CollectionConfig } from 'payload/types'

const Files: CollectionConfig = {
  slug: 'files',
  access: {
    read: () => true
  },
  upload: {
    staticURL: '/files',
    staticDir: 'files',
    mimeTypes: ['application/pdf']
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text'
        }
      ]
    }
  ],
  admin: {
    group: 'Media',
    useAsTitle: 'title'
  }
}

export default Files
