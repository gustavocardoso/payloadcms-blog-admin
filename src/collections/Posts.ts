import { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'
import Content from '../blocks/Content'
import Copy from '../blocks/Copy'
import Cta from '../blocks/Cta'
import Ribbon from '../blocks/Ribbon'
import slug from '../fields/slug'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishDate', 'status']
  },
  versions: true,
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin
  },
  // access: {
  //   read: () => true
  // },
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true
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
      type: 'tabs',
      tabs: [
        {
          label: 'Post Media',
          fields: [
            {
              name: 'postImage',
              type: 'upload',
              relationTo: 'images',
              required: true,
              maxDepth: 2
            }
          ]
        },
        {
          label: 'Post Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Content, Cta, Ribbon]
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
      maxDepth: 2,
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
      maxDepth: 2,
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
