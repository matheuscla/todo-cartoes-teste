import React from 'react'
import PropTypes from 'prop-types'
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

Navbar.propTypes = {
  logo: PropTypes.string
}

export default Navbar
