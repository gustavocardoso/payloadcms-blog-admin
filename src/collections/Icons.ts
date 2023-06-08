import { CollectionConfig } from 'payload/types'

const Icons: CollectionConfig = {
  slug: 'icons',
  upload: {
    staticURL: '/media',
    staticDir: 'media/images',
    mimeTypes: ['image/*'],
    resizeOptions: {
      fit: 'contain'
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 200,
        height: 200,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail'
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          admin: {
            width: '50%'
          }
        },
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'text',
          admin: {
            width: '50%'
          }
        }
      ]
    }
  ],
  admin: {
    group: 'Media'
  }
}

export default Icons
