import axios from '../api/axios'
import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'

function Row({ title, id, fetchURL }) {
  const [movies, setMovies] = useState([])

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchURL)
    console.log(response)
    setMovies(response.data.results)
  }, [fetchURL])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'
          onClick={()=>{
            document.getElementById(id).scrollLeft -= window.innerWidth - 80
          }}
          >{'<'}</span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'
          onClick={()=>{
            document.getElementById(id).scrollLeft += window.innerWidth - 80
          }}
          >{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default Row
