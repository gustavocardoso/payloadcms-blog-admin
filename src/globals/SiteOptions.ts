import { GlobalConfig } from 'payload/types'

const SiteOptions: GlobalConfig = {
  slug: 'site-options',
  label: 'Options',
  admin: {
    group: 'Theme'
  },
  fields: [
    {
      type: 'group',
      name: 'General',
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
              name: 'adminEmail',
              label: 'Admin Email',
              type: 'text',
              admin: {
                width: '50%'
              }
            },
            {
              name: 'logo',
              label: 'Logo',
              type: 'upload',
              relationTo: 'logos'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      name: 'Contact',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'email',
              label: 'Email',
              type: 'text',
              admin: {
                width: '50%'
              }
            },
            {
              name: 'phone',
              label: 'Phone Number',
              type: 'text',
              admin: {
                width: '50%'
              }
            }
          ]
        },
        {
          type: 'row',
          fields: [
            {
              name: 'address',
              label: 'Adress',
              type: 'text',
              admin: {
                width: '45%'
              }
            },
            {
              name: 'city',
              label: 'City',
              type: 'text',
              admin: {
                width: '30%'
              }
            },
            {
              name: 'country',
              label: 'Country',
              type: 'text',
              admin: {
                width: '25%'
              }
            }
          ]
        }
      ]
    }
  ]
}

export default SiteOptions
