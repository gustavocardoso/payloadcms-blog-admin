import { CollectionConfig } from 'payload/types'

const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media/images',
    resizeOptions: {
      fit: 'contain'
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: undefined,
        height: 169,
        position: 'centre'
      },
      {
        name: 'card',
        width: 600,
        height: 338,
        position: 'centre'
      },
      {
        name: 'hero',
        width: 760,
        height: 499,
        position: 'centre'
      },
      {
        name: 'featured',
        width: 1000,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: 500,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
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
    group: 'Media',
    useAsTitle: 'title'
  }
}

export default Images
