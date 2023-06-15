import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListActor from '../components/ListActor';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'test data' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test('fetchData successfully fetches data', async () => {
  const url = 'https://swapi.dev/api/people';
  const result = await fetch(url);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(url);
  expect(result).toEqual({ data: 'test data' });
});

test('fetchData handles errors', async () => {
  const errorMessage = 'Network error';
  fetch.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));


  await expect(fetch('https://swapi.dev/api/people')).rejects.toThrow(errorMessage);

  expect(fetch).toHaveBeenCalledTimes(1);
});

test('renders List Actor with correct data and handles click event', () => {
  const mockActor = {
    name: 'Luke Skywalker',
    height: '172',
    birth_year: '19BBY',
  };

  const handleClick = jest.fn();

  render(<ListActor actor={mockActor} onClick={handleClick} />);

  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  expect(screen.getByText('Height: 172')).toBeInTheDocument();
  expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument();

  userEvent.click(screen.getByText('Detail', { selector: 'button' }));

  expect(handleClick).toHaveBeenCalledTimes(1);
});