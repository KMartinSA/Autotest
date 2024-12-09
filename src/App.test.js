import { render, screen } from '@testing-library/react';
import App from './App.js';
import Headers from './components/Headers.js';


describe('Jest smoke test', () => { 
  it('tests that Jest is working', () => { 
      expect(2+2).toBe(4); 
  });
});

describe('tests Header', () => {
  it('tests Title', () => {
  render (<Headers/>);
    const txtElement = screen.getByAltText('logo');
    expect(txtElement).toBeInTheDocument();
  });
  it('tests Header Slogan', () => {
    render (<Headers/>);
    const txtElement = screen.getByText(/Do you know your flags?/i);
    expect(txtElement).toBeInTheDocument();;
  });
});

describe('tests App Elements', () => {
  it('tests Label', () => {
    render (<App/>);
  const LablElement = screen.getByText('Country Name:');
  expect(LablElement).toBeVisible()
  });
  it('tests Input Box', () => {
    render (<App/>);
    const InptElement = screen.getByPlaceholderText('Type here');
    expect(InptElement).toBeVisible();
  });
  it('tests Submit Button', () => {
    render (<App/>);
  const submitElement = screen.getByRole('submit-btn');
  expect (submitElement).toBeInTheDocument();
  });
  it('tests Next Button', () => {
    render (<App/>);
  const nextElement = screen.getByRole('next-btn');
  expect (nextElement).toBeInTheDocument();
  });
  it('tests Start Again Button', () => {
    render (<App/>);
  const startAgainElement = screen.getByRole('start-new-quiz-btn');
  expect (startAgainElement).toBeInTheDocument();



  });



 





});
