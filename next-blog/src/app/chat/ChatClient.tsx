'use client'

import { User } from '@prisma/client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface ChatClientProps{
    currentUser?: User | null 
}


export default function ChatClient({ currentUser}: ChatClientProps) {

    const [receiver, setReceiver] = useState({
        receiverId: '',
        receiverName:'',
        receiverImage: '',
    })
    
    const [layout, setLayout] = useState(false)

    useEffect(()=>{
        axios.get(`/api/chat`)
            .then((res) => console.log(res))
    },[])
    
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
