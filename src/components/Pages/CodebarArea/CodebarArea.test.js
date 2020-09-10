import React from 'react';
import CodebarArea from './CodebarArea';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders CodebarArea Page', () => {
  render(
    <MemoryRouter>
      <CodebarArea />
    </MemoryRouter>
  );
  screen.getByText('Bringing Codebar to your area');
});
