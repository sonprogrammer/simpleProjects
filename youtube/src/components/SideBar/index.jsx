import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize'
import SmallSideBar from './SmallSideBar'
import BigSideBar from './BigSideBar'
import { SidebarContext } from '../../context/SidebarContext'

export default function SideBar() {
  const { width } = useWindowSize()
  const { isToggled, setIsToggled } = useContext(SidebarContext)
  
  useEffect(()=>{
    width <= 1300 
    ? setIsToggled(false)
    : setIsToggled(true)
  },[])
  
  
  return (
    <>
      {
        width < 792 
          ? null
          : (
            isToggled ?
             <BigSideBar />
            :<SmallSideBar />
          )
      } 
    </>
  )
}
