import React from 'react'

import backIcon from '../../assets/images/back.svg'
import defaultLogo from '../../assets/images/default-logo.svg'

import { Container, LoginButton } from './styles'

const Navbar = ({ logo = defaultLogo }) => (
  <Container>
    <span>
      <img src={backIcon} alt='Voltar' />
      Voltar
    </span>
    <img src={logo} alt='logo' />
    <LoginButton>Login</LoginButton>
  </Container>
)

export default Navbar
