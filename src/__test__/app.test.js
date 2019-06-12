import React from 'react'
import { mount } from 'enzyme'

import App from '../App'
import Navbar from '../components/Navbar'
import Steps from '../components/Steps'
import ListInfo from '../components/ListInfo'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

let wrapped

beforeEach(() => {
  wrapped = mount(<App />)
  wrapped.setState({
    filtered: [
       { id: 1, name: 'Wine - Vidal Icewine Magnotta', price: 64.33 },
       { id: 2, name: 'Daves Island Stinger', price: 16.03 },
    ],
    products: [
      { id: 1, name: 'Wine - Vidal Icewine Magnotta', price: 64.33 },
      { id: 2, name: 'Daves Island Stinger', price: 16.03 },
    ]
  })
})


describe('<App />', () => {
  it('shows a NavBar', () => {
    expect(wrapped.find(Navbar).length).toEqual(1)
  })

  it('shows Steps', () => {
    expect(wrapped.find(Steps).length).toEqual(1)
  })

  it ('shows a ListInfo', () => {
    expect(wrapped.find(ListInfo).length).toEqual(1)
  })

  it ('shows a Filter', () => {
    expect(wrapped.find(Filter).length).toEqual(1)
  })

  it('should render a list of ProductCards', () => {
    expect(wrapped.find(ProductCard)).toHaveLength(2)
  })

  it('should return the max price', () => {
    wrapped.instance().getMaxPrice()
    wrapped.update()

    const filterWrapper = wrapped.find(Filter)
    expect(filterWrapper.props().maxPrice).toEqual(64.33);
  })

  it('should return the min price', () => {
    wrapped.instance().getMinPrice()
    wrapped.update()

    const filterWrapper = wrapped.find(Filter)
    expect(filterWrapper.props().minPrice).toEqual(16.03);
  })

  it('should return filtered products by price', () => {
    wrapped.instance().handlePriceChange([0, 17])
    wrapped.update()

    expect(wrapped.find(ProductCard)).toHaveLength(1)
  })

  it('should not change pagination value', () => {
    wrapped.instance().loadMore()
    wrapped.update()

    expect(wrapped.state().pagination).toEqual(12)
  })

  it('should change pagination value', () => {
    wrapped.setState({ filtered: [
      { id: 1, price: 64.33, name:"Wine - Vidal Icewine Magnotta" },
      { id: 2, price: 16.03, name:"Daves Island Stinger"},
      { id: 3, price: 56.09, name:"Bread - Raisin Walnut Pull" },
      { id: 4, price: 51.23, name:"Bar Mix - Pina Colada, 355 Ml" },
      { id: 5, price: 48.09, name:"Bread Base - Toscano" },
      { id: 6, price: 19.38, name:"Capon - Whole"},
      { id: 7, price: 28.72, name:"Cookie Dough - Double"},
      { id: 8, price: 52.44, name:"Beef - Short Ribs" },
      { id: 9, price: 73.27, name:"Bread - Assorted Rolls" },
      { id: 10, price: 24.19, name:"Jam - Apricot"},
      { id: 11, price: 72.47, name:"Wine - Pinot Noir Pond Haddock"},
      { id: 12, price: 43.88, name:"V8 - Berry Blend"},
      { id: 13, price: 16.97, name:"Wine - Sherry Dry Sack, William"},
      { id: 14, price: 23.42, name:"Wine - Zonnebloem Pinotage"},
    ]})
    wrapped.instance().loadMore()
    wrapped.update()

    expect(wrapped.state().pagination).toEqual(24)
  })

  it('should remove a product from the list', () => {
    wrapped.instance().removeProductHandler(1)
    wrapped.update()

    expect(wrapped.find(ProductCard)).toHaveLength(1)
  })
})
