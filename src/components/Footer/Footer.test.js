import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('renders footer correctly', () => {
  render(<Footer />);
});

it('matches snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
