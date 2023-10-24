import { slateEditor } from '@payloadcms/richtext-slate'
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
      type: 'richText',
      editor: slateEditor({
        // Move the admin property as shown below
        admin: {
          elements: ['ul', 'ol', 'link'],
          leaves: ['bold', 'italic', 'strikethrough', 'underline']
        }
      })
    }
  ]
}

export default Copy
