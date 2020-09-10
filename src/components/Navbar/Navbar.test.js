import React from 'react';
import Navbar from './Navbar';

import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
