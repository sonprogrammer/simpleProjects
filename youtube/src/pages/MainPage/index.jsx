import React, { useCallback, useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getVideoInfo } from '../../helpers/fetchingData'

export default function MainPage() {
  const [mainVideos, setMainVideos] = useState([])

  const getMainVideos = useCallback(async () =>{
    try {
      const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful%20place`)
      let videosArray = response.data.items;
      videosArray = await getVideoInfo(videosArray)
      console.log('videoarra',videosArray)
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
