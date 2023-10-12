import { Block } from 'payload/types'

const Heading: Block = {
  slug: 'heading-block',
  labels: {
    singular: 'Heading',
    plural: 'Headings'
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'content',
          label: 'Text',
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
          name: 'tag',
          type: 'select',
          options: [
            {
              value: 'h1',
              label: 'H1'
            },
            {
              value: 'h2',
              label: 'H2'
            },
            {
              value: 'h3',
              label: 'H3'
            },
            {
              value: 'h4',
              label: 'H4'
            },
            {
              value: 'h5',
              label: 'H5'
            },
            {
              value: 'h6',
              label: 'H6'
            }
          ],
          admin: {
            width: '20%'
          }
        },
        {
          name: 'alignment',
          type: 'select',
          options: [
            {
              value: 'left',
              label: 'Left'
            },
            {
              value: 'center',
              label: 'Center'
            },
            {
              value: 'right',
              label: 'Right'
            }
          ],
          admin: {
            width: '20%'
          }
        },
        {
          name: 'textStyle',
          type: 'select',
          options: [
            {
              value: 'none',
              label: 'Regular'
            },
            {
              value: 'lowercase',
              label: 'Lowercase'
            },
            {
              value: 'uppercase',
              label: 'Uppercase'
            }
          ],
          admin: {
            width: '20%'
          }
        },
        {
          name: 'class',
          label: 'Class',
          type: 'text',
          admin: {
            width: '40%'
          }
        }
      ]
    }
  ]
}
export default Heading
