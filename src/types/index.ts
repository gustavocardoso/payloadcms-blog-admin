export interface User {
  id: string
  firstName: string
  lastName: string
  role?: 'admin' | 'content'
  email?: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  loginAttempts?: number
  lockUntil?: string
  createdAt: string
  updatedAt: string
}
