import React from 'react';
import About from './About';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders About Page', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  screen.getByText('We are codebar.');
});
