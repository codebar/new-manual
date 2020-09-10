import React from 'react';
import MailingList from './MailingList';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('Renders MailingList Page', () => {
  render(
    <MemoryRouter>
      <MailingList />
    </MemoryRouter>
  );
  screen.getByText('Mailing List Policy');
});
