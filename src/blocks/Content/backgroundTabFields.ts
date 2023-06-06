import { Field } from 'payload/types'
import backgroundOptions from '../utils/bgOptions'

const backgroundTabFields: Function = (): Field[] => [
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
  }
]

export default backgroundTabFields()
