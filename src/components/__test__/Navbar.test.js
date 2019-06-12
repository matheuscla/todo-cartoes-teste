import React from 'react'
import { mount } from 'enzyme'
import Navbar from '../Navbar'

let wrapped

beforeEach(() => {
  wrapped = mount(<Navbar />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a login Button, a logo and a back link', () => {
  expect(wrapped.find('div').length).toEqual(1)
  expect(wrapped.find('span').length).toEqual(1)
  expect(wrapped.find('img').length).toEqual(2)
  expect(wrapped.find('button').length).toEqual(1)
})
