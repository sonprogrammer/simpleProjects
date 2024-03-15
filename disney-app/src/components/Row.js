import axios from '../api/axios'
import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal'
import { Container, Content, Wrapper } from './Row-styles'

import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


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

  function handleClick(movie) {
    setModalOpen(true)
    setMovieSelected(movie)
  }

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        loop={true}
        navigation //arrow버튼 보이게
        pagination={{ clickable: true }} //page버튼 보이게 할지
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <Content>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Wrapper>
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
              </Wrapper>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </Container>
  )
}

export default Row
