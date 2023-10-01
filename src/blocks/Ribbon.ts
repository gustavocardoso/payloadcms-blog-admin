import { Block } from 'payload/types'
import buttonBgOptions from './utils/buttonBgOptions'

const Ribbon: Block = {
  slug: 'ribbon-block',
  // imageURL: 'http://localhost:3000/media/Ribbon.png',
  // imageAltText: 'Ribbon block',
  labels: {
    singular: 'Ribbon',
    plural: 'Ribbons'
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text'
            },
            {
              name: 'text',
              label: 'Text',
              type: 'textarea'
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'link',
                  label: 'Link',
                  type: 'text'
                },
                {
                  name: 'linkText',
                  label: 'Link Text',
                  type: 'text'
                },
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
                  ],
                  defaultValue: 'text'
                },
                {
                  name: 'buttonStyle',
                  type: 'select',
                  options: buttonBgOptions,
                  admin: {
                    width: '20%',
                    condition: (data, siblingData, { user }) => {
                      if (siblingData.linkStyle === 'button') {
                        return true
                      } else {
                        return false
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          label: 'Background',
          fields: [
            {
              name: 'background',
              type: 'select',
              options: [
                {
                  label: 'None',
                  value: 'none'
                },
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
                },
                {
                  label: 'Highlight',
                  value: 'highlight'
                },
                {
                  label: 'Alert',
                  value: 'alert'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Ribbon
