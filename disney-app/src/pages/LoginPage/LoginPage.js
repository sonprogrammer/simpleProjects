import React from 'react'
import {
  Container,
  Content,
  Center,
  LogoOne,
  SignUpLink,
  Description,
  LogoTwo,
  BgImage
} from './LoginPage-styles'

export default function LoginPage() {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src='/images/cta-logo-one.svg' alt='logo-one' />
          <SignUpLink>지금 가입</SignUpLink>
          <Description>영화에 대한 프리미엄 엑세스를 얻으십시오.</Description>
          <LogoTwo src='images/cta-logo-two.png' alt='logo-two' />
        </Center>
        <BgImage />
      </Content>
    </Container>
  )
}
