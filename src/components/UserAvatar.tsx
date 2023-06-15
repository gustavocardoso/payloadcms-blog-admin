import React, { useEffect, useState } from 'react'
import { useAuth } from 'payload/components/utilities'
import { User } from '../types'

const UserAvatar: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/api/users/me')
      const { user } = await response.json()
      const avatarUrl = user?.thumbnail?.url
      setAvatar(avatarUrl)
    }
    getUser()
  }, [])

  return (
    <div>
      {avatar ? (
        <img src={avatar} width='50' className='avatar-image' />
      ) : (
        <svg
          className='graphic-account'
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 25 25'
        >
          <circle className='circle1' cx='12.5' cy='12.5' r='11.5'></circle>
          <circle className='circle2' cx='12.5' cy='10.73' r='3.98'></circle>
          <path d='M12.5,24a11.44,11.44,0,0,0,7.66-2.94c-.5-2.71-3.73-4.8-7.66-4.8s-7.16,2.09-7.66,4.8A11.44,11.44,0,0,0,12.5,24Z'></path>
        </svg>
      )}
    </div>
  )
}

export default UserAvatar
