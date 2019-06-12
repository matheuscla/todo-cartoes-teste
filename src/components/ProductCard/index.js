import React from 'react'
import PropTypes from 'prop-types'

import deleteIcon from '../../assets/images/delete.svg'

import { Container, Info } from './styles'

const ProductCard = ({ title, price, img, removeProduct, id }) => (
  <Container>
    <img src={img} alt={title} />
    <Info>
      <div>
        <span>{title}</span>
        <button onClick={() => removeProduct(id)}>
          <img src={deleteIcon} alt='Deletar' />
        </button>
      </div>
      <strong>R${price}</strong>
    </Info>
  </Container>
)

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  removeProduct: PropTypes.func,
  id: PropTypes.number
}

export default ProductCard
