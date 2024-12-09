import { render, screen } from '@testing-library/react';
import App from './App.js';
import Correct from './components/Correct';

describe('smoke test', () => { //a describe block groups several tests together
  it('tests that Jest is working', () => { //smoke test
      expect(2+2).toBe(4); // smoke test's assertion
  });
});

describe('tests Header', () => {
  it('tests Title', () => {
  
    const txtElement = screen.getByAltText('logo');
    expect(txtElement).toBeInTheDocument();
  });
  it('tests Header Slogan', () => {
   
    const txtElement = screen.getByText(/Do you know your flags?/i);
    expect(txtElement).toBeInTheDocument();;
  });
});


describe('tests Elements', () => {
  it('tests Label', () => {
   
  const LablElement = screen.getByText('Country Name:');
  expect(LablElement).toBeVisible()
  });
  it('tests Input Box', () => {
  
    const InptElement = screen.getByPlaceholderText('Type here');
    expect(InptElement).toBeVisible();
  });
  it('tests Submit Button', () => {
  
  const submitElement = screen.getByRole('submit-btn');
  expect (submitElement).toBeInTheDocument();
  });
  it('tests Next Button', () => {
 
  const nextElement = screen.getByRole('next-btn');
  expect (nextElement).toBeInTheDocument();
  });
  it('tests Start Again Button', () => {

  const startAgainElement = screen.getByRole('start-new-quiz-btn');
  expect (startAgainElement).toBeInTheDocument();
  });



 





});
