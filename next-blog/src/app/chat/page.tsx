import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ChatClient from './ChatClient'

export default async function ChatPage() {
    const currentUser = getCurrentUser()
    
  return (
    <div>
      <ChatClient />
    </div>
  )
}
