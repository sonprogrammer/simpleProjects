'use client'

import { User } from '@prisma/client'
import React, { useState } from 'react'

interface ChatClientProps{
    currentUser?: User | null 
}


export default function ChatClient({ currentUser}: ChatClientProps) {

    const [reciever, setReceiver] = useState({
        recieverId: '',
        recieverName:'',
        recieverImage: '',
    })
    
    const [layout, setLayout] = useState(false)
    
  return (
    <main>
      <div className='grid grid-cols-[1fr] md:grid-cols-[300px_1fr]'>

        <section className={`md:flex ${layout && 'hidden'}`}>
            {/* contact component */}
        </section>
        <section className={`md:flex ${!layout && 'hidden'}`}>
            {/* chat component */}
        </section>
      </div>
    </main>
  )
}
