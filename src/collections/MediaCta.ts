import { CollectionConfig } from 'payload/types'

const CtaImages: CollectionConfig = {
  slug: 'cta-images',
  access: {
    read: () => true
  },
  fields: [],
  upload: {
    staticURL: '/media/images',
    staticDir: 'media/images',
    imageSizes: [
      {
        name: 'background',
        width: 1920,
        height: undefined,
        position: 'centre'
      },
      {
        name: 'mobile',
        width: 910,
        height: undefined,
        position: 'centre'
      },
      {
        name: 'thumbnail',
        width: 400,
        height: 100,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  },
  admin: {
    group: 'Media',
    useAsTitle: 'title',
    defaultColumns: ['filename', 'title', 'updatedAt']
  }
}

export default CtaImages
