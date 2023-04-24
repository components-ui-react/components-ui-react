import React from 'react'
import DCard from './index'

describe('<DCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DCard />)
  })
})