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
            }
          ]
        },
        {
          type: 'row',
          fields: [
            {
              name: 'logo',
              label: 'Logo',
              type: 'upload',
              relationTo: 'logos',
              admin: {
                width: '30%'
              }
            },
            {
              type: 'select',
              name: 'fontAwesome',
              label: 'Enable Font Awesome?',
              options: [
                {
                  label: 'Yes',
                  value: 'enable'
                },
                {
                  label: 'No',
                  value: 'disable'
                }
              ],
              defaultValue: 'disable',
              admin: {
                width: '15%'
              }
            },
            {
              type: 'text',
              name: 'fontAwesomeLink',
              defaultValue:
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
              admin: {
                width: '20%',
                readOnly: true,
                condition: (data, sibilingData, _) => {
                  return sibilingData.fontAwesome === 'enable'
                }
              }
            },
            {
              type: 'text',
              name: 'fontAwesomeOverride',
              admin: {
                width: '35%',
                description: 'Only admin can perform this action',
                condition: (data, siblingData, { user }) => {
                  return siblingData.fontAwesome === 'enable' && user.role === 'admin'
                }
              }
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      name: 'Footer',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'copyright',
              label: 'Copyright',
              type: 'text'
            }
          ]
        },
        {
          type: 'row',
          fields: [
            {
              name: 'footerLogo',
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
