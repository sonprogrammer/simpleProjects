import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import { SidebarContext } from '../../context/SidebarContext'

export default function VideoPage() {
  const {videoId} = useParams()
  let location = useLocation()
  const { state: currentVideo} = location

  const { setIsToggled } = useContext(SidebarContext)

  useEffect(()=>{
    setIsToggled(false)
  },[])

  const onPlayerReady = (e) =>{
    e.target.playVideo()
  }

  const opts ={
    width: '640',
    height: '390',
    playerVars:{
      autoplay: 1
    }
  }
  return (
    <div>
      <YouTube className='youtube-player' videoId={videoId} onPlay={onPlayerReady} opts={opts}/>
    </div>
  )
}
