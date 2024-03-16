import React, { useEffect, useState } from 'react'
import {
  NavWrapper,
  Logo,
  Input,
  Login,
  SignOut,
  UserImg,
  DropDown,
} from './Nav-styles'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, setUser } from '../store/userSlice'

const Nav = () => {

  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const { pathname } = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === '/') {
          navigate('/main')
        }
      } else {
        navigate('/')
      }
    })
  }, [auth, navigate, pathname])

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
  const handleChane = (e) => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  const handleAuth = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser({
          id: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }))
        
        localStorage.setItem('userData', JSON.stringify(result.user))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <NavWrapper show={show}>
        <Logo>
          <img
            src='./images/logo.svg'
            alt='Disney Plus Logo'
            onClick={() => {
              window.location.href = '/'
            }}
          />
        </Logo>

        {pathname === '/' ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <Input
              className='nav__input'
              type='text'
              placeholder='search'
              value={searchValue}
              onChange={handleChane}
            />
            <SignOut>
              <UserImg src={user.photoURL} alt={user.displayName} />
              <DropDown>
                <span onClick={handleLogout}>Sign Out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </NavWrapper>
    </div>
  )
}

export default Nav
