import { getByAltText, render, screen } from '@testing-library/react';
import App from './App';

test('renders input and submit button', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Type here/i);
  const button = screen.getByText(/Submit/i);
  expect(input).toBeInTheDocument(); // Input field is in the document
  expect(button).toBeInTheDocument(); // Submit button is in the document
});

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
test.skip('Image', () => {
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