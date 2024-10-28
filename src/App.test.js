import { getByAltText, render, screen } from '@testing-library/react';
import App from './App';

test('Title', () => {
  render(<App />);
  const txtElement = screen.getByText(/FlagXpedia/i);
  expect(txtElement).toBeInTheDocument();
});
test('Header Slogan', () => {
  render(<App />);
  const txtElement = screen.getByText(/Do you know your flags?/i);
  expect(txtElement).toBeInTheDocument();
});
test('Label', () => {
  render(<App />);
  const LablElement = screen.getByText('Country Name:');
  expect(LablElement).toBeVisible()
});
test('Input Box', () => {
  render(<App />);
  const InptElement = screen.getByPlaceholderText('Type here');
  expect(InptElement).toBeVisible();
});
test('Submit Button', () => {
  render(<App />);
  const RetrnElement = screen.getByRole('btn');
  expect (RetrnElement).toBeInTheDocument();
});