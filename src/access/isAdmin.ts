import { Access, FieldAccess } from 'payload/types'
import { User } from '../types'

export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.role === 'admin')
}

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user }
}) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.role === 'admin')
}
