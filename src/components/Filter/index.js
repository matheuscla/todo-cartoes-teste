import React from 'react'
import 'rc-slider/assets/index.css'
import { Range } from 'rc-slider'
import PropTypes from 'prop-types'

import { Container, PriceRange, RangeContainer, SearchInput } from './styles'

const Filter = ({ byName, onChangeSlider, priceChange, minPrice, maxPrice, min, max, term }) => (
  <Container>
    <SearchInput
      id='search-bar'
      placeholder='Pesquisar'
      value={term}
      onChange={(e) => byName(e.target.value)} />
    <h3>Preço</h3>
    <hr />
    <PriceRange>
      <span>R$ {minPrice}</span>
      <span>R$ {maxPrice}</span>
    </PriceRange>
    <RangeContainer>
      <Range
        included
        onChange={onChangeSlider}
        onAfterChange={priceChange}
        value={[min, max]}
        min={minPrice}
        max={maxPrice}/>
    </RangeContainer>
  </Container>
)

Filter.propTypes = {
  byName: PropTypes.func,
  onChangeSlider: PropTypes.func,
  priceChange: PropTypes.func,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  term: PropTypes.string
}

export default Filter
