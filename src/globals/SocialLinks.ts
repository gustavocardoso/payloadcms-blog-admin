import { GlobalConfig } from 'payload/types'

const SocialLinks: GlobalConfig = {
  slug: 'social-links',
  label: 'Social Links',
  admin: {
    group: 'Theme'
  },
  fields: [
    {
      type: 'array',
      name: 'social',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'network',
              label: 'Network',
              type: 'select',
              options: ['Facebook', 'Instagram', 'Linkedin', 'Twitter', 'Youtube'],
              required: true,
              admin: {
                width: '30%'
              }
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                width: '70%'
              }
            }
          ]
        }
      ]
    }
  ]
}

export default SocialLinks
