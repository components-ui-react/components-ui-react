import React from 'react';
import DrawingCanvas from './index';

describe('<DrawingCanvas />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DrawingCanvas width='1000px' height='1000px' />);
  });
});
