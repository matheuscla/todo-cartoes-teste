import React from 'react'

import defaultAvatar from '../../assets/images/default-avatar.png'

import { Container, Info, ImageBackground } from './styles'

const ListInfo = ({ title, totalProducts, totalPrice }) => (
  <Container>
    <Info>
      <ImageBackground />
      <img src={defaultAvatar} alt={title} />
      <h1>{ title }</h1>
      <span>{totalProducts} itens com o total de R$ ${totalPrice},00</span>
      <p>
        Você poderá dar um nome exclusivo e escolher <br />
        uma foto dos seus depois.
      </p>
      <button>QUERO ESTA LISTA!</button>
    </Info>
  </Container>
)

export default ListInfo
