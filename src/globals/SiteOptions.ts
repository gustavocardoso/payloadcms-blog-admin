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
                width: '40%'
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
                width: '20%'
              }
            },
            {
              type: 'select',
              name: 'fontAwesomeLink',
              label: 'Select Version',
              options: [
                {
                  label: '6.4.2 - All',
                  value: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
                },
                {
                  label: '6.4.2 - Brands',
                  value:
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/brands.min.css'
                },
                {
                  label: '6.4.2 - Regular',
                  value:
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/regular.min.css'
                },
                {
                  label: '6.4.2 - Solid',
                  value:
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/solid.min.css'
                }
              ],
              admin: {
                width: '20%',
                condition: (data, sibilingData, _) => {
                  return sibilingData.fontAwesome === 'enable'
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
