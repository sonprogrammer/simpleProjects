import Link from 'next/link'
import React from 'react'

export default function NavItem({mobile} : {mobile?: boolean}) {
  return (
    <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
      <li className='py-2 text-center border-b-4 cursor-pointer'><Link href='/admin'>Admin</Link></li>
      <li className='py-2 text-center border-b-4 cursor-pointer'><Link href='/user'>User</Link></li>
      <li className='py-2 text-center border-b-4 cursor-pointer'><button>SignIn</button></li>
      <li className='py-2 text-center border-b-4 cursor-pointer'><button>SignOut</button></li>
    </ul>
  )
}
