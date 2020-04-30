import React from 'react';
import { render } from '@testing-library/react';
import SeasonDisplay from './SeasonDisplay';

test('renders summer message for Northern Hemisphere during June', () => {
  const { getByText } = render(<SeasonDisplay lat={35.97} month={5} />);
  const seasonMessage = getByText(/summer/i);
  expect(seasonMessage).toBeInTheDocument();
});

test('renders winter message for Northern Hemisphere during November', () => {
  const { getByText } = render(<SeasonDisplay lat={35.97} month={11} />);
  const seasonMessage = getByText(/winter/i);
  expect(seasonMessage).toBeInTheDocument();
});

test('renders winter message for Southern Hemisphere during May', () => {
  const { getByText } = render(<SeasonDisplay lat={-35.97} month={4} />);
  const seasonMessage = getByText(/winter/i);
  expect(seasonMessage).toBeInTheDocument();
});

test('renders summer message for Southern Hemisphere during January', () => {
  const { getByText } = render(<SeasonDisplay lat={-35.97} month={0} />);
  const seasonMessage = getByText(/summer/i);
  expect(seasonMessage).toBeInTheDocument();
});
