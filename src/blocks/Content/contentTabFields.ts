import { Field } from 'payload/types'

// Blocks
import Copy from '../Copy'
import Heading from '../Heading'
import Image from '../Image'
import Icons from '../Icons'
import Quote from '../Quote'

const contentTabFields: Function = (): Field[] => [
  {
    type: 'group',
    label: 'Column 1',
    name: 'columnOne',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [Quote, Copy, Heading, Image, Icons]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
        console.log(siblingData)
        if (
          siblingData.numberOfColumns !== null &&
          (siblingData.numberOfColumns === 'one-col' ||
            siblingData.numberOfColumns === 'two-col' ||
            siblingData.numberOfColumns === 'three-col')
        ) {
          return true
        } else {
          return false
        }
      }
    }
  },
  {
    type: 'group',
    label: 'Column 2',
    name: 'columnTwo',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [Quote, Copy, Heading, Image, Icons]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
        console.log(siblingData)
        if (
          siblingData.numberOfColumns !== null &&
          (siblingData.numberOfColumns === 'two-col' || siblingData.numberOfColumns === 'three-col')
        ) {
          return true
        } else {
          return false
        }
      }
    }
  },
  {
    type: 'group',
    label: 'Column 3',
    name: 'columnThree',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [Quote, Copy, Heading, Image, Icons]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
        console.log(siblingData)
        if (siblingData.numberOfColumns !== null && siblingData.numberOfColumns === 'three-col') {
          return true
        } else {
          return false
        }
      }
    }
  }
]

export default contentTabFields()
