import React, { Component } from 'react'

import api from './services/api'

import { CardsContainer, MainContainer, Wrapper } from './styles/components'

import Navbar from './components/Navbar'
import Steps from './components/Steps'
import ListInfo from './components/ListInfo'
import ProductCard from './components/ProductCard'
import Filter from './components/Filter'

class App extends Component {
  state = {
    products: [],
    filtered: []
  }

  componentDidMount() {
    api.get('/products')
      .then(products => this.setState({ products: products.data, filtered: products.data }))
  }

  removeProductHandler = id => {
    this.setState(prevState => {
      const filteredProducts = prevState.products
        .filter(product => product.id !== id)

      return { products: filteredProducts }
    })
  }

  filterByName = term => {
    const { filtered } = this.state
    if (term === '') {
      return this.setState({ filtered: this.state.products })
    }

    setTimeout(() => {
      const filteredProducts = filtered.filter((product) => {
        return product.name.toLowerCase().indexOf(
          term.toLowerCase()) !== -1
        })

        this.setState({ filtered: filteredProducts })
    }, 300)
  }

  render() {
    const { filtered } = this.state
    console.log(filtered)
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
          <Wrapper>
            <Filter
              byName={this.filterByName}
            />
            <CardsContainer>
              {filtered.map(product => (
                <ProductCard
                  removeProduct={this.removeProductHandler}
                  title={product.name}
                  img={product.image}
                  price={product.price}
                  id={product.id}
                  key={product.id}  />
              ))}
            </CardsContainer>
          </Wrapper>
        </MainContainer>
      </div>
    )
  }
}

export default App;
