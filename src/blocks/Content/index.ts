import { Block } from 'payload/types'

import styleTabFields from './styleTabFields'
import backgroundTabFields from './backgroundTabFields'
import optionsTabFields from './optionsTabFields'
import headerTabFields from './headerTabFields'

const Content: Block = {
  slug: 'content',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Style',
          fields: styleTabFields
        },
        {
          label: 'Header Content',
          fields: headerTabFields
        },
        {
          label: 'Background',
          fields: backgroundTabFields
        },
        {
          label: 'Options',
          fields: optionsTabFields
        }
      ]
    }
  ]
}

export default Content
