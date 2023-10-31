import { Field } from 'payload/types'

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'radio',
      options: [
        {
          label: 'Page',
          value: 'page'
        },
        {
          label: 'Custom URL',
          value: 'custom'
        }
      ]
    },
    {
      name: 'label',
      label: 'Label',
      type: 'text'
    },
    {
      name: 'url',
      label: 'Custom URL',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
        description: 'https://www.link.com or /custom/url'
      }
    },
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
      unique: true,
      maxDepth: 1,
      admin: {
        description: 'Page to link to',
        condition: (_, siblingData) => siblingData?.type === 'page'
      }
    }
  ]
}

export default link
