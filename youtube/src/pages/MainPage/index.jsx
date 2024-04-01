import React, { useCallback, useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getVideoInfo } from '../../helpers/fetchingData'

export default function MainPage() {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  
  const [mainVideos, setMainVideos] = useState(storedVideos || [])
  

  const getMainVideos = useCallback(async () =>{
    try {
      if(!storedVideos){
        const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful%20place`)
        let videosArray = response.data.items;
        videosArray = await getVideoInfo(videosArray)
        setMainVideos(videosArray)

        localStorage.setItem('mainVideos', JSON.stringify(videosArray))

      }
    } catch (error) {
      console.log(error)
    }
  },[])
  
  useEffect(()=>{
    getMainVideos()
  },[getMainVideos])

  return (
    <div>
      mainpage      
    </div>
  )
}
