import React from 'react';
import Landing from './Landing';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders Landing Page', () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  screen.getByText('We’re a community built on the following values');
});
