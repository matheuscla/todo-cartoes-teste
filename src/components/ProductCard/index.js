import React from 'react'

import deleteIcon from '../../assets/images/delete.svg'

import { Container, Info } from './styles'

const ProductCard = ({ title, price, img }) => (
  <Container>
    <img src={img} alt={title} />
    <Info>
      <div>
        <span>{title}</span>
        <img src={deleteIcon} alt='Deletar' />
      </div>
      <strong>R${price},00</strong>
    </Info>
  </Container>
)

export default ProductCard
