import React from 'react';
import { render } from '@testing-library/react';
import Mall from './Mall';

test('renders learn react link', () => {
  const { getByText } = render(<Mall />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
