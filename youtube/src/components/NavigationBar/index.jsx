import React from 'react'
import LeftNav from './LeftNav'
import SearchBar from './SearchBar'
import RightNav from './RightNav'

export default function NavigationBar() {
  return (
    <nav>
      <LeftNav />
      <SearchBar />
      <RightNav />
    </nav>
  )
}
