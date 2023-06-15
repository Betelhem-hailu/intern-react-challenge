import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../components/Details';

test('renders actor detail with correct data', () => {
  const mockActor = {
    name: 'Luke Skywalker',
    height: '172',
    birth_year: '19BBY',
  };

  render(<Details actor={mockActor} />);

  expect(screen.getByText('Luke Skywalker', { selector: 'h3' })).toBeInTheDocument();
  expect(screen.getByText('Height: 172')).toBeInTheDocument();
  expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument();
});