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
          name: 'text',
          label: 'Text',
          type: 'text',
          admin: {
            width: '40%'
          }
        },
        {
          name: 'size',
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
              value: 'H3',
              label: 'h3'
            },
            {
              value: 'H4',
              label: 'h4'
            },
            {
              value: 'H5',
              label: 'h5'
            },
            {
              value: 'H6',
              label: 'h6'
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
          name: 'class',
          label: 'Class',
          type: 'text',
          admin: {
            width: '20%'
          }
        }
      ]
    }
  ]
}
export default Heading
