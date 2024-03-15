import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchPage() {
  const [seachResults, setSearchResults] = useState([])

  const useQuery = () =>{
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const searchTerm = query.get('q')


  useEffect(()=>{
    if(searchTerm){
      fetchSearchMovie()
    }
  },[searchTerm])

  const fetchSearchMovie = async () => {
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.result)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      
    </div>
  )
}
