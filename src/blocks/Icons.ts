import { Block } from 'payload/types'
import backgroundOptions from './utils/bgOptions'
import buttonBgOptions from './utils/buttonBgOptions'

const Icons: Block = {
  slug: 'icons-block',
  labels: {
    singular: 'Icons',
    plural: 'Icons'
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'style',
          label: 'Style',
          type: 'select',
          options: [
            {
              label: 'Title Below Icon',
              value: 'title-below-icon'
            },
            {
              label: 'Icon on Left',
              value: 'icon-on-left'
            },
            {
              label: 'Cards',
              value: 'cards'
            }
          ]
        },
        {
          name: 'titleIconAlignment',
          label: 'Title and Icon Vertical Alignment',
          type: 'select',
          options: [
            {
              label: 'Top',
              value: 'top'
            },
            {
              label: 'Center',
              value: 'center'
            }
          ],
          admin: {
            condition: (data, siblingData, { user }) => {
              if (siblingData.style && siblingData.style === 'icon-on-left') {
                return true
              } else {
                return false
              }
            }
          }
        },
        {
          name: 'iconsPerLine',
          label: 'Number of Icons Per Line',
          type: 'select',
          options: [
            {
              label: '1 Icon per line',
              value: '1'
            },
            {
              label: '2 Icons per line',
              value: '2'
            },
            {
              label: '3 Icons per line',
              value: '3'
            },
            {
              label: '4 Icons per line',
              value: '4'
            }
          ]
        },
        {
          name: 'textIconAlignment',
          label: 'Icon and Text Alignment',
          type: 'select',
          options: [
            {
              label: 'Left',
              value: 'left'
            },
            {
              label: 'Center',
              value: 'center'
            },
            {
              label: 'Right',
              value: 'right'
            }
          ],
          admin: {
            condition: (data, siblingData, { user }) => {
              if (siblingData.style && siblingData.style !== 'icon-on-left') {
                return true
              } else {
                return false
              }
            }
          }
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'linkStyle',
          label: 'Link Style',
          type: 'select',
          options: [
            {
              label: 'Text',
              value: 'text'
            },
            {
              label: 'Button',
              value: 'button'
            }
          ]
        },
        {
          name: 'linkColour',
          label: 'Link Colour',
          type: 'select',
          options: [
            {
              label: 'Primary',
              value: 'primary'
            },
            {
              label: 'Secondary',
              value: 'secondary'
            },
            {
              label: 'Tertiary',
              value: 'tertiary'
            },
            {
              label: 'Light',
              value: 'light'
            },
            {
              label: 'Dark',
              value: 'dark'
            }
          ]
        }
      ]
    },
    {
      type: 'array',
      name: 'icons',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'iconType',
              label: 'Image or Icon (Fontawesome)',
              type: 'select',
              options: [
                {
                  label: 'Image',
                  value: 'image'
                },
                {
                  label: 'Icon',
                  value: 'icon'
                }
              ]
            },
            {
              type: 'upload',
              name: 'iconImage',
              relationTo: 'icons',
              admin: {
                condition: (data, siblingData, { user }) => {
                  if (siblingData.iconType && siblingData.iconType === 'image') {
                    return true
                  } else {
                    return false
                  }
                }
              }
            },
            {
              type: 'text',
              name: 'iconString',
              admin: {
                condition: (data, siblingData, { user }) => {
                  if (siblingData.iconType && siblingData.iconType === 'icon') {
                    return true
                  } else {
                    return false
                  }
                }
              }
            }
          ]
        },
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text'
            },
            {
              label: 'Description',
              name: 'description',
              type: 'textarea'
            },
            {
              name: 'link',
              label: 'Link',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}

export default Icons
