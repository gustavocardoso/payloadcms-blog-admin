import backgroundOptions from '../blocks/utils/bgOptions'

export const background = [
  {
    name: 'background',
    type: 'select',
    options: backgroundOptions
  },
  {
    name: 'backgroundImage',
    type: 'upload',
    relationTo: 'images',
    admin: {
      condition: (data, siblingData, { user }) => {
        if (siblingData.background === 'image') {
          return true
        } else {
          return false
        }
      }
    }
  },
  {
    type: 'row',
    fields: [
      {
        name: 'backgroundOpacity',
        type: 'select',
        options: [
          {
            label: 'None',
            value: 'none'
          },
          {
            label: '20%',
            value: '20'
          },
          {
            label: '30%',
            value: '30'
          },
          {
            label: '50%',
            value: '50'
          }
        ],
        defaultValue: 'none',
        admin: {
          width: '50%',
          condition: (data, siblingData, { user }) => {
            if (siblingData.background === 'image') {
              return true
            } else {
              return false
            }
          }
        }
      },
      {
        name: 'backgroundTextColor',
        type: 'select',
        options: [
          {
            label: 'Light',
            value: 'light'
          },
          {
            label: 'Dark',
            value: 'dark'
          }
        ],
        defaultValue: 'light',
        admin: {
          width: '50%',
          condition: (data, siblingData, { user }) => {
            if (siblingData.background === 'image') {
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
