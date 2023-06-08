import { Block } from 'payload/types'

const Ribbon: Block = {
  slug: 'ribbon-block',
  // imageURL: 'http://localhost:3000/media/Ribbon.png',
  // imageAltText: 'Ribbon block',
  labels: {
    singular: 'Ribbon',
    plural: 'Ribbons'
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'text',
      type: 'textarea'
    },
    {
      name: 'link',
      type: 'text'
    }
  ]
}

export default Ribbon
