import { Block } from 'payload/types'
import link from '../fields/link'
import buttonBgOptions from './utils/buttonBgOptions'

const Button: Block = {
  slug: 'button-block',
  labels: {
    singular: 'Button',
    plural: 'Buttons'
  },
  fields: [
    {
      type: 'row',
      fields: [
        link,
        {
          name: 'style',
          type: 'select',
          options: buttonBgOptions
        }
      ]
    }
  ]
}
export default Button
