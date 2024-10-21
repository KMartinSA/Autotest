import { getByAltText, render, screen } from '@testing-library/react';
import App from './App';

test('Title', () => {
  render(<App />);
  const txtElement = screen.getByText(/Flag App/i);
  expect(txtElement).toBeInTheDocument();
});
test('Header Slogan', () => {
  render(<App />);
  const txtElement = screen.getByText(/Do you know your flags?/i);
  expect(txtElement).toBeInTheDocument();
});
test('Image', () => {
  render(<App />);
  const ImgElement = screen.findByAltText(/Flags/);
  expect (ImgElement).toBeInTheDocument();
});
test('Label', () => {
  render(<App />);
  const LablElement = screen.findAllByLabelText(/Country Name:/);
  expect (LablElement).toBeVisible();
});
test('Input Box', () => {
  render(<App />);
  const InptElement = screen.findByDisplayValue(/France/);
  expect (InptElement).toEqual(getByAltText);
});
test('Return Box', () => {
  render(<App />);
  const RetrnElement = screen.findByAltText(/France/);
  expect (RetrnElement).toEqual();
});