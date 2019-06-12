import React from 'react'
import { mount } from 'enzyme'
import Filter from '../Filter'

let wrapped

beforeEach(() => {
  wrapped = mount(<Filter />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a searchInput, a RangeSelector', () => {
  expect(wrapped.find('input').length).toEqual(1)
  expect(wrapped.find('div').length).toEqual(10)
  expect(wrapped.find('span').length).toEqual(2)
})
