import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ChatClient from './ChatClient'

export default async function ChatPage() {
    const currentUser = await getCurrentUser()
    
  return (
    <div>
      <ChatClient currentUser={currentUser}/>
    </div>
  )
}
