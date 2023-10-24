import { slateEditor } from '@payloadcms/richtext-slate'
import { Field } from 'payload/types'

const headerTabFields: Function = (): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'headerBlockSize',
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
        defaultValue: 'col-span-10',
        admin: {
          width: '40%',
          description: 'Determine the width of the Header section.'
        }
      },
      {
        name: 'headerBlockAlignment',
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
        defaultValue: 'center',
        admin: {
          width: '40%',
          description: 'Determine the alignment of the header block inside the section.',
          condition: (data, siblingData, { user }) => {
            if (siblingData.headerBlockSize && siblingData.headerBlockSize !== 'col-span-12') {
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
        defaultValue: 'h2',
        admin: {
          width: '20%'
        }
      },
      {
        name: 'titleColor',
        label: 'Title Color',
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
            label: 'Highlight',
            value: 'highlight'
          },
          {
            label: 'Dark',
            value: 'dark'
          }
        ],
        defaultValue: 'dark',
        admin: {
          width: '20%'
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
        defaultValue: 'h3',
        admin: {
          width: '20%'
        }
      },
      {
        name: 'subtitleColor',
        label: 'Subtitle Color',
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
            label: 'Highlight',
            value: 'highlight'
          },
          {
            label: 'Dark',
            value: 'dark'
          }
        ],
        defaultValue: 'dark',
        admin: {
          width: '20%'
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
            defaultValue: 'below',
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
            defaultValue: 'center',
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
        editor: slateEditor({
          // Move the admin property as shown below
          admin: {
            elements: ['ul', 'link'],
            leaves: ['bold', 'italic', 'strikethrough', 'underline']
          }
        })
      }
    ]
  }
]

export default headerTabFields()
