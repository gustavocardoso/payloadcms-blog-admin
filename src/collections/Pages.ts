import { CollectionConfig } from 'payload/types'

import Content from '../blocks/Content'
import Hero from '../blocks/Hero'
import Ribbon from '../blocks/Ribbon'

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
      name: 'layout',
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
    {
      name: 'pageMeta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          // minLength: 20,
          maxLength: 100
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          // minLength: 40,
          maxLength: 160
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text'
        }
      ],
      admin: {
        position: 'sidebar'
      }
    }
  ]
}
export default Pages
