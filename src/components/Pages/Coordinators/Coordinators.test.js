import React from 'react';
import Coordinators from './Coordinators';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders Coordinators Page', () => {
  render(
    <MemoryRouter>
      <Coordinators />
    </MemoryRouter>
  );
  screen.getByText('Coordinators Guide');
});
