import React, { Component } from 'react'

import api from './services/api'

import { CardsContainer, MainContainer } from './styles/components'

import Navbar from './components/Navbar'
import Steps from './components/Steps'
import ListInfo from './components/ListInfo'
import ProductCard from './components/ProductCard'

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    api.get('/products')
      .then(products => this.setState({ products: products.data }))
  }

  renderProducts = () => {
    const { products } = this.state

    return products.map(product => (
      <ProductCard
        title={product.name}
        img={product.image}
        price={product.price}
        key={product.id}  />
    ))
  }

  render() {
    const { products } = this.state

    return (
      <div>
        <Navbar />
        <Steps />
        <MainContainer>
          <ListInfo
            title='O Bebê Nerd'
            totalProducts={57}
            totalPrice={6000}
            />
          <CardsContainer>
            {products.map(product => (
              <ProductCard
                title={product.name}
                img={product.image}
                price={product.price}
                key={product.id}  />
            ))}
          </CardsContainer>
        </MainContainer>
      </div>
    )
  }
}

export default App;
