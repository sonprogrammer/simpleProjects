import axios from '../api/axios'
import React, { useEffect, useState } from 'react'
import requests from '../api/requests'
import './Banner.css'
import { Container, HomeContainer, Iframe } from './Banner-styles'

const Banner = () => {
  const [movie, setMovie] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying)

    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    })
    setMovie(movieDetail)
    console.log(movieDetail)
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str
  }

  if(isClicked){
    return(
      <>
      <Container>
        <HomeContainer>
          <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&mute=1&playlist=${movie.videos.results[0].key}`}
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          />
        </HomeContainer>
      </Container>
        <button onClick={()=>{setIsClicked(false)}}>X</button>
      </>
    )
  }


  return (
    <div>
      <header
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}>
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie?.videos?.results[0]?.key && (
              <button
                className='banner__button play'
                onClick={() => {
                  setIsClicked(true)
                }}>
                Play
              </button>
            )}
          </div>
          <p className='banner__description'>{truncate(movie.overview, 100)}</p>
        </div>
        <div className='banner--fadeBottom' />
      </header>
    </div>
  )
}

export default Banner
