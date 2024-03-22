import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'

export default async function UserPage() {

  const userData = await getCurrentUser()
  console.log('userData',userData)
  
  return (
    <div>
      user can see
    </div>
  )
}
