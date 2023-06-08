import { Field } from 'payload/types'
import formatSlug from '../utils/formatSlug'
import deepMerge from '../utils/deepmerge'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

// By dynamically building fields in code configurations are reusable and concise
const slug: Slug = (fieldToUse = 'title', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      localized: true,
      admin: {
        position: 'sidebar',
        readOnly: true
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)]
      }
    },
    overrides
  )

export default slug
