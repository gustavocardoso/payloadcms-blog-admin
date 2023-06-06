import { Field } from 'payload/types'

const optionsTabFields: Function = (): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'anchor',
        label: 'Anchor',
        type: 'text'
      },
      {
        name: 'cssClasses',
        label: 'CSS Classes',
        type: 'text'
      }
    ]
  }
]

export default optionsTabFields()
