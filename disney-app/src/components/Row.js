import axios from '../api/axios'
import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal'

function Row({ title, id, fetchURL }) {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchURL)
    console.log(response)
    setMovies(response.data.results)
  }, [fetchURL])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])


  function handleClick(movie){
    setModalOpen(true)
    setMovieSelected(movie)
  }
  
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
              onClick={()=>handleClick(movie)}
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

      {modalOpen && 
        <MovieModal 
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
      }
      
    </div>
  )
}

export default Row
