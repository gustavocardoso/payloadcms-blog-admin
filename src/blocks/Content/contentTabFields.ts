import { Field } from 'payload/types'

// Blocks
import Button from '../Button'
import Copy from '../Copy'
import Heading from '../Heading'
import Icons from '../Icons'
import Image from '../Image'
import Quote from '../Quote'
import Video from '../Video'

const contentTabFields: Function = (): Field[] => [
  {
    type: 'group',
    label: 'Column 1',
    name: 'columnOne',
    fields: [
      {
        name: 'columnOneLayout',
        type: 'blocks',
        blocks: [Button, Copy, Heading, Icons, Image, Quote, Video]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
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
        name: 'columnTwoLayout',
        type: 'blocks',
        blocks: [Button, Copy, Heading, Icons, Image, Quote, Video]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
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
  }
  // {
  //   type: 'group',
  //   label: 'Column 3',
  //   name: 'columnThree',
  //   fields: [
  //     {
  //       name: 'columnThreeLayout',
  //       type: 'blocks',
  //       blocks: [Quote, Copy, Heading, Image, Icons]
  //     }
  //   ],
  //   admin: {
  //     condition: (data, siblingData, { user }) => {
  //       if (siblingData.numberOfColumns !== null && siblingData.numberOfColumns === 'three-col') {
  //         return true
  //       } else {
  //         return false
  //       }
  //     }
  //   }
  // }
]

export default contentTabFields()
