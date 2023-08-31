import { CollectionConfig, PayloadRequest } from 'payload/types'
import { Contact } from '../types'

const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    group: 'Content',
    useAsTitle: 'firstName',
    defaultColumns: ['firstName', 'lastname', 'email', 'company']
  },
  access: {
    read: () => true,
    create: () => true
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true,
          admin: {
            // readOnly: true
          }
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          required: true,
          admin: {
            // readOnly: true
          }
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required: true,
          admin: {
            // readOnly: true,
            width: '40%'
          }
        },
        {
          name: 'company',
          label: 'Company',
          type: 'text',
          required: true,
          admin: {
            // readOnly: true,
            width: '30%'
          }
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number',
          type: 'text',
          required: true,
          admin: {
            // readOnly: true,
            width: '30%'
          }
        }
      ]
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      admin: {
        // readOnly: true,
        className: 'contact-message'
      }
    }
  ],
  hooks: {
    afterChange: [
      ({ req, operation, doc }: { req: PayloadRequest; operation: any; doc: Contact }) => {
        if (operation === 'create') {
          console.log('will send')
          const { payload } = req

          payload.sendEmail({
            from: `"${doc.firstName} ${doc.lastName}" <${doc.email}>`, // sender address
            to: 'gustavocardoso@gmail.com, gustavo@bigroomcreative.com', // list of receivers
            subject: 'Payload BlogAdmin - New Contact', // Subject line
            html: `
              <p>New entry from <strong>${doc.firstName} ${doc.lastName}</strong></p>
              <ul>
                <li><strong>Email:</strong> ${doc.email}</li>
                <li><strong>Company:</strong> ${doc.company}</li>
                <li><strong>Phone Number:</strong> ${doc.phoneNumber}</li>
                <li><strong>Message:</strong> ${doc.message}</li>
              </ul>
            ` // html body
          })
        }
      }
    ]
  }
}

export default Contacts
