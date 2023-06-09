import { CollectionConfig } from 'payload/types'

import Copy from '../blocks/Copy'
import Alert from '../blocks/Heading'
import Quote from '../blocks/Quote'
import slug from '../fields/slug'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishDate', 'status']
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'postMeta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text'
        }
      ]
    },
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Post Media',
          fields: [
            {
              name: 'postImage',
              type: 'upload',
              relationTo: 'images',
              required: true
            }
          ]
        },
        {
          label: 'Post Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Copy, Alert, Quote]
            }
          ]
        }
      ]
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
    slug(),
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      access: {
        update: () => false
      },
      maxDepth: 0,
      // defaultValues can use functions to return data to populate the create form and also when making POST requests the server will use the value or function to fill in any undefined fields before validation occurs
      // defaultValue: ({ user }) => user.id,
      admin: {
        position: 'sidebar',
        readOnly: true,
        condition: user => Boolean(user?.author)
      }
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        condition: data => Boolean(data?.publishedDate)
      }
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar'
      }
    }
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.author = req.user.id
          }

          if (!data.publishedDate) {
            data.publishedDate = new Date()
          }

          return data
        }
      }
    ]
  }
}
export default Posts
