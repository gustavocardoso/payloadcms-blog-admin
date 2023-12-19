import { Field } from 'payload/types'

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        {
          label: 'Page',
          value: 'page'
        },
        {
          label: 'Custom URL',
          value: 'custom'
        }
      ],
      defaultValue: 'custom'
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
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
        description: 'https://www.link.com or /custom/url'
      }
    },
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: false,
      maxDepth: 2,
      admin: {
        description: 'Page to link to',
        condition: (_, siblingData) => siblingData?.type === 'page'
      }
    }
  ]
}

export default link
