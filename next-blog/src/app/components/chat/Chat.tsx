import { TUserWithChat } from '@/types'
import React from 'react'
import Input from './Input'

interface ChatProps{
  currentUser: TUserWithChat
  receiver: {
    receiverId: string,
    receiverName: string,
    receiverImage: string
  }
  setLayout: (layout: boolean) => void
}

export default function Chat({
  currentUser,
  receiver,
  setLayout
}: ChatProps) {

  if(!receiver.receiverName || !currentUser){
    return <div className='h-full w-full'></div>
  }
  return (
    <div className='w-full'>
      <div>

      </div>
      <div className='flex flex-col gap-8 p-4 overflow-hidden h-[calc(100vh_-_60px_-_70px_-_80px)]'>
        
      </div>
      <div>
        <Input
          receiverId={receiver?.receiverId}
          currentUserId={currentUser?.id}
         />
      </div>
    </div>
  )
}
