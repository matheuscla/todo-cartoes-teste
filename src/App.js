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
    filtered: [],
    min: 0,
    max: 0
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

  getMinPrice = () => {
    const { products } = this.state
    const prices = products.map(product => product.price)

    return prices.reduce((a, b) => Math.min(a, b))
  }

  getMaxPrice = () => {
    const { products } = this.state
    const prices = products.map(product => product.price)

    return prices.reduce((a, b) => Math.max(a, b))
  }

  handlePriceChange = (values) => {
    const { filtered } = this.state

    this.setState({
      min: values[0],
      max: values[1]
    }, () => {
      const filteredPrice = filtered.map(product => {
        if (product.price >= values[0] && product.price <= values[1]) {
          return product
        }
      })

      this.setState({ filtered: filteredPrice.filter(Boolean) })
    })
  }

  render() {
    const { filtered, max, min } = this.state
    return (
      <div onScroll={this.handleScroll}>
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
              priceChange={this.handlePriceChange}
              onChangeSlider={(values) => this.setState({ min: values[0], max: values[1]})}
              minPrice={filtered.length > 1 ? this.getMinPrice() : 0 }
              maxPrice={filtered.length > 1 ? this.getMaxPrice() : 0 }
            />
            <CardsContainer>
              {filtered.map((product) => (
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
