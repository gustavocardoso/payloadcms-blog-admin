import { Block } from 'payload/types'

const Copy: Block = {
  slug: 'copy-block',
  labels: {
    singular: 'Copy',
    plural: 'Copies'
  },
  fields: [
    {
      name: 'copy',
      type: 'richText'
    }
  ]
}

export default Copy
