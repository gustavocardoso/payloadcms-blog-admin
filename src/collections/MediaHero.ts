import { CollectionConfig } from 'payload/types'

const HeroImages: CollectionConfig = {
  slug: 'hero-images',
  access: {
    read: () => true
  },
  upload: {
    staticURL: '/media/images',
    staticDir: 'media/images',
    imageSizes: [
      {
        name: 'background',
        width: 1920,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: 1080,
        position: 'centre'
      },
      {
        name: 'blog',
        width: 1200,
        height: 630,
        position: 'centre'
      },
      {
        name: 'hero',
        width: 1280,
        height: 720,
        position: 'centre'
      },
      {
        name: 'card',
        width: 1024,
        height: 768,
        position: 'centre'
      },
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
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
    useAsTitle: 'title',
    defaultColumns: ['filename', 'title', 'updatedAt']
  }
}

export default HeroImages
