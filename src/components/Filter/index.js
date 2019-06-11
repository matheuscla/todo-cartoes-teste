import React from 'react'
import 'rc-slider/assets/index.css'
import { Range } from 'rc-slider'

import { Container, PriceRange, RangeContainer, SearchInput } from './styles'

const Filter = ({ byName, onChangeSlider, priceChange, minPrice, maxPrice, min, max }) => (
  <Container>
    <SearchInput placeholder='Pesquisar' onChange={(e) => byName(e.target.value)} />
    <h3>Preço</h3>
    <hr />
    <PriceRange>
      <span>R$ {minPrice}</span>
      <span>R$ {maxPrice}</span>
    </PriceRange>
    <RangeContainer>
      <Range
        onChange={onChangeSlider}
        onAfterChange={priceChange}
        value={[minPrice, maxPrice]}
        min={minPrice}
        max={maxPrice}/>
    </RangeContainer>
  </Container>
)

export default Filter
