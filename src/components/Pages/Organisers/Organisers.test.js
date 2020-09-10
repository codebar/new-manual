import React from 'react';
import Organisers from './Organisers';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders Organisers Page', () => {
  render(
    <MemoryRouter>
      <Organisers />
    </MemoryRouter>
  );
  screen.getByText('What do I need from a host?');
});
