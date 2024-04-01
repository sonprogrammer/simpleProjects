import React from 'react'
import { MdApps, MdNotifications, MdVideoCall } from 'react-icons/md'
import { Tooltip } from 'react-tooltip'


export default function RightNav() {
  return (
    <div className='buttons'>
      <button className='icon-container'>
      <MdVideoCall size={25} data-tip='Creatㄹㅇㄹㅇe' data-for='navbar'/>
      </button>
      <button className='icon-container'>
        <MdApps size={25} />
      </button>
      <button className='icon-container'>
        <MdNotifications size={25} />
      </button>

      <Tooltip  
        id='navbar'
        backgroundColor='gray'
        effect='solid'
        delayHide={150}
        arrowColor='transparent'
      />
    </div>
  )
}
