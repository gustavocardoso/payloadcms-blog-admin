import { GlobalConfig } from 'payload/types'
import link from '../fields/link'

const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: {
    group: 'Theme'
  },
  fields: [
    {
      name: 'menuItems',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [link]
    }
  ]
}
export default Navigation
