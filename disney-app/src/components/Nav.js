import React, { useEffect, useState } from 'react'
import { NavWrapper,Logo } from './Nav-styles'

const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY > 50){
        setShow(true)
      }else{
        setShow(false)
      }
    })
    return () =>{
      window.removeEventListener('scroll', ()=>{})
    }
  },[])

  return (
    <div>
      <NavWrapper show={show}>
        <Logo>
          <img src="./images/logo.svg" alt="Disney Plus Logo" onClick={()=>{window.location.href("/")}}/>
        </Logo>
      </NavWrapper>
    </div>
  )
}

export default Nav

