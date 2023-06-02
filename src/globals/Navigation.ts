import { GlobalConfig } from 'payload/types'

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
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          unique: true
        }
      ]
    }
  ]
}
export default Navigation
