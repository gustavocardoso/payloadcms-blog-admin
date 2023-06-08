import { Field } from 'payload/types'
import Alert from '../Heading'
import Copy from '../Copy'
import Quote from '../Quote'

const headerTabFields: Function = (): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'blockSize',
        type: 'select',
        label: 'Block Size',
        options: [
          {
            label: 'Full Width',
            value: 'col-span-12'
          },
          {
            label: '85% (10 column)',
            value: 'col-span-10'
          },
          {
            label: '2/3 (8 column)',
            value: 'col-span-8'
          },
          {
            label: 'Half (6 column)',
            value: 'col-span-6'
          }
        ],
        admin: {
          width: '50%',
          description: 'Determine the width of the Header section.'
        }
      },
      {
        name: 'blockAlignment',
        type: 'select',
        label: 'Block Alignment',
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
          width: '50%',
          description: 'Determine the alignment of the block inside the section.',
          condition: (data, siblingData, { user }) => {
            console.log(siblingData.blockSize)
            if (siblingData.blockSize && siblingData.blockSize !== 'col-span-12') {
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
        type: 'text',
        admin: {
          width: '40%'
        }
      },
      {
        name: 'titleTag',
        label: 'Title Tag',
        type: 'select',
        options: [
          {
            label: 'H1',
            value: 'h1'
          },
          {
            label: 'H2',
            value: 'h2'
          }
        ],
        admin: {
          width: '30%'
        }
      },
      {
        name: 'titleColor',
        label: 'Title Color',
        type: 'select',
        options: [
          {
            label: 'Primary',
            value: 'text-primary'
          },
          {
            label: 'Secondary',
            value: 'text-secondary'
          },
          {
            label: 'Tertiary',
            value: 'text-tertiary'
          },
          {
            label: 'Light',
            value: 'text-light'
          },
          {
            label: 'Dark',
            value: 'text-dark'
          }
        ],
        admin: {
          width: '30%'
        }
      }
    ]
  },
  {
    type: 'row',
    fields: [
      {
        name: 'subtitle',
        label: 'Subtitle',
        type: 'text',
        admin: {
          width: '40%'
        }
      },
      {
        name: 'subtitleTag',
        label: 'Subtitle Tag',
        type: 'select',
        options: [
          {
            label: 'H1',
            value: 'h1'
          },
          {
            label: 'H2',
            value: 'h2'
          },
          {
            label: 'H3',
            value: 'h3'
          }
        ],
        admin: {
          width: '30%'
        }
      },
      {
        name: 'subtitleColor',
        label: 'Subtitle Color',
        type: 'select',
        options: [
          {
            label: 'Primary',
            value: 'text-primary'
          },
          {
            label: 'Secondary',
            value: 'text-secondary'
          },
          {
            label: 'Tertiary',
            value: 'text-tertiary'
          },
          {
            label: 'Light',
            value: 'text-light'
          },
          {
            label: 'Dark',
            value: 'text-dark'
          }
        ],
        admin: {
          width: '30%'
        }
      },
      {
        type: 'row',
        fields: [
          {
            name: 'subtitlePosition',
            label: 'Subtitle Position',
            type: 'select',
            options: [
              {
                label: 'Above Title',
                value: 'above'
              },
              {
                label: 'Below Title',
                value: 'below'
              }
            ],
            admin: {
              width: '30%'
            }
          },
          {
            name: 'contentAlignment',
            label: 'Title, Subtitle, and Content Alignment',
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
              width: '30%'
            }
          }
        ]
      },
      {
        name: 'content',
        label: 'Content',
        type: 'richText',
        admin: {
          elements: ['ul'],
          leaves: ['bold', 'italic', 'strikethrough', 'underline']
        }
      }
    ]
  }
]

export default headerTabFields()
