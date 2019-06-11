import React from 'react'
import 'rc-slider/assets/index.css'
import { Range } from 'rc-slider'

import { Container, PriceRange, RangeContainer, SearchInput } from './styles'

const Filter = ({ byName }) => (
  <Container>
    <SearchInput placeholder='Pesquisar' onChange={(e) => byName(e.target.value)} />
    <h3>Preço</h3>
    <hr />
    <PriceRange>
      <span>R$ 0</span>
      <span>R$ 3450</span>
    </PriceRange>
    <RangeContainer>
      <Range
        min={10}
        max={100}/>
    </RangeContainer>
  </Container>
)

export default Filter
