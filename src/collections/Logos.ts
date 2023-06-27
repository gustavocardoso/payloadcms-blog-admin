import { CollectionConfig } from 'payload/types'

const Logos: CollectionConfig = {
  slug: 'logos',
  upload: {
    staticURL: '/media',
    staticDir: 'media/images',
    mimeTypes: ['image/*'],
    resizeOptions: {
      fit: 'inside'
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 350,
        height: undefined,
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

export default Logos
