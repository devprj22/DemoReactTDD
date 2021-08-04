import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor : 'red'});
});

test('button turns blue when clicked and then back to red', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor : 'blue'});
  expect(colorButton.textContent).toBe('Change to red');

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor : 'red'});
  expect(colorButton.textContent).toBe('Change to blue');
});

test('initial conditions', () => {

  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});
  expect(checkbox).not.toBeChecked();

});

test('clicking of checkbox', () => {

  render(<App />);

  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // Testing the toggling
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'red'});
});

test('Clicked disabled button has gray background and reverts to blue', () =>{
  render(<App />);

  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'blue'});
});