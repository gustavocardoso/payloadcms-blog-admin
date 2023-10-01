import { Field } from 'payload/types'

const styleTabFields: Function = (): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'blockWIdth',
        type: 'select',
        label: 'Block Width',
        options: [
          {
            label: 'Full Width',
            value: 'full'
          },
          {
            label: 'Container',
            value: 'container'
          }
        ],
        defaultValue: 'container'
      },
      {
        name: 'blockPadding',
        type: 'select',
        label: 'Block Padding',
        options: [
          {
            label: 'Padding',
            value: 'py-28'
          },
          {
            label: 'Padding Top',
            value: 'pt-28 pb-0'
          },
          {
            label: 'Padding Bottom',
            value: 'pt-0 pb-28'
          },
          {
            label: 'No Padding',
            value: 'py-0'
          }
        ],
        defaultValue: 'py-28'
      },
      {
        name: 'numberOfColumns',
        type: 'select',
        label: 'Number of Columns',
        options: [
          {
            label: '1 Column',
            value: 'one-col'
          },
          {
            label: '2 Columns',
            value: 'two-col'
          }
          // {
          //   label: '3 Columns',
          //   value: 'three-col'
          // }
        ],
        defaultValue: 'one-col'
      }
    ]
  },
  {
    type: 'row',
    fields: [
      {
        name: 'desktopContainerWidth',
        type: 'select',
        label: 'Desktop Container Width',
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
        defaultValue: 'col-span-12'
      },
      {
        name: 'desktopContainerAlignment',
        type: 'select',
        label: 'Desktop Container Alignment',
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
          condition: (data, siblingData, { user }) => {
            if (
              siblingData.desktopContainerWidth !== null &&
              siblingData.desktopContainerWidth !== 'col-span-12'
            ) {
              return true
            } else {
              return false
            }
          }
        }
      },
      {
        name: 'desktopContentAlignment',
        type: 'select',
        label: 'Content Alignment',
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
        defaultValue: 'top'
      }
    ]
  }
]

export default styleTabFields()
