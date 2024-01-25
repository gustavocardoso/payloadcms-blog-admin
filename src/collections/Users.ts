import { CollectionConfig } from 'payload/types'
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    depth: 1,
    useAPIKey: true,
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
    lockTime: 600 * 1000 // Time period to allow the max login attempts
  },
  admin: {
    group: 'Admin',
    description: 'User administration - Create, edit and delete users.',
    defaultColumns: ['firstName', 'lastName', 'email'],
    useAsTitle: 'firstName',
    hidden: ({ user }) => user.role !== 'admin'
  },
  access: {
    create: isAdmin,
    // read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text'
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text'
        }
      ]
    },
    // {
    //   name: 'shipDate',
    //   type: 'date',
    //   admin: {
    //     description: 'Date when package label was created',
    //     width: '50%',
    //     date: {
    //       pickerAppearance: 'dayOnly'
    //     }
    //   }
    // },
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin'
        },
        {
          label: 'Content',
          value: 'content'
        }
      ],
      defaultValue: ['content'],
      saveToJWT: true,
      admin: {
        position: 'sidebar'
      },
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      }
    },
    {
      name: 'thumbnail',
      label: 'Profile Image',
      type: 'upload',
      relationTo: 'images'
    }
  ]
}

export default Users
