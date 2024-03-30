import React from 'react'
import useWindowSize from '../../helpers/useWindowSize'
import SmallSideBar from './SmallSideBar'
import BigSideBar from './BigSideBar'

export default function SideBar() {
  const { width } = useWindowSize()
  
  return (
    <>
      {
        width < 792 
          ? null
          : (
            width < 1250 ?
              <SmallSideBar />
              : <BigSideBar />
          )
      } 
    </>
  )
}
