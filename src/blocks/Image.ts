import { Block } from 'payload/types'

const Image: Block = {
  slug: 'image-block',
  labels: {
    singular: 'Image',
    plural: 'Images'
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'images'
    },
    {
      type: 'row',
      fields: [
        {
          name: 'caption',
          label: 'Caption',
          type: 'text',
          admin: {
            width: '70%'
          }
        },
        {
          name: 'setting',
          label: 'Setting',
          type: 'select',
          options: [
            {
              label: 'Fill',
              value: 'fill'
            },
            {
              label: 'Inset',
              value: 'inset'
            }
          ],
          admin: {
            width: '30%'
          }
        }
      ]
    }
  ]
}
export default Image
