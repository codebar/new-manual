import React from 'react';
import Sponsors from './Sponsors';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders Sponsors Page', () => {
  render(
    <MemoryRouter>
      <Sponsors />
    </MemoryRouter>
  );
  screen.getByText('Why should you sponsor a workshop?');
});
