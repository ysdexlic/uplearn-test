import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the app', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
