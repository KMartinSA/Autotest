import App from './App.js';
import Headers from './components/Headers.js';
import {render, fireEvent, screen, getByLabelText, userEvent} from '@testing-library/react'

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
    const txtElement = screen.getByText('Submit');
    expect(txtElement).toBeInTheDocument();;
  });
  it('tests Next Button', () => {
    render (<App/>);
    const txtElement = screen.getByText('Next');
    expect(txtElement).toBeInTheDocument();;
  });

  describe('Test return', () => { 
    it('tests that Jest is working', async () => { 
      render (<App/>);
      const field = screen.getByRole('name').querySelector('input')
        fireEvent.focus(field,{ target: {value: 'Italy'}}) 
        expect((field)).tohaveValue('Italy')

    });
  });
  


});
