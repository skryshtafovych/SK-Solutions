import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NPI data lookup header', () => {
  render(<App />);
  const linkElement = screen.getByText(/NPI Data Lookup/i);
  expect(linkElement).toBeInTheDocument();
});
