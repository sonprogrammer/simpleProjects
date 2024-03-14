import React from 'react'
import Nav from '../../components/Nav'
import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Row from '../../components/Row'
import { Container } from './style'
import requests from '../../api/requests'

export default function MainPage() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" id="TR" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" id="AM" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" id="CM" fetchURL={requests.fetchComedyMovies}/>
    </Container>
  )
}
