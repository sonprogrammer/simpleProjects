import React, { useEffect, useState } from 'react'
import { NavWrapper, Logo, Input, Login } from './Nav-styles'
import { useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { pathname } = useLocation()

  const navigate = useNavigate()


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const handleChane = (e)=>{
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <div>
      <NavWrapper show={show}>
        <Logo>
          <img
            src='./images/logo.svg'
            alt='Disney Plus Logo'
            onClick={() => {
              window.location.href = '/main'
            }}
          />
        </Logo>

        {pathname === '/' ? (
          <Login>Login</Login>
        ) : (
          <Input
            className='nav__input'
            type='text'
            placeholder='search'
            value={searchValue}
            onChange={handleChane}
          />
        )}
      </NavWrapper>
    </div>
  )
}

export default Nav
