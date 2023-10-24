import { CollectionConfig } from 'payload/types'

import Content from '../blocks/Content'
import Hero from '../blocks/Hero'
import Ribbon from '../blocks/Ribbon'
import slug from '../fields/slug'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    group: 'Content',
    defaultColumns: ['title', 'status'],
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'excerpt',
      type: 'textarea',
      minLength: 40,
      maxLength: 160
    },
    {
      name: 'pageLayout',
      type: 'blocks',
      blocks: [Hero, Content, Ribbon]
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft'
        },
        {
          value: 'published',
          label: 'Published'
        }
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar'
      }
    },
    slug()
  ]
}
export default Pages
