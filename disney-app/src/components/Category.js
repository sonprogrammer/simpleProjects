import React from 'react'
import { Container,Wrap } from './Category-styles'

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
        <video autoPlay loop muted>
          <source src='/videos/disney.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay loop muted>
          <source src='/videos/marvel.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="national-geographic" />
        <video autoPlay loop muted>
          <source src='/videos/national-geographic.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay loop muted>
          <source src='/videos/pixar.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="starwars" />
        <video autoPlay loop muted>
          <source src='/videos/star-wars.mp4' type='video/mp4' />
        </video>
      </Wrap>
    </Container>
  )
}

export default Category
