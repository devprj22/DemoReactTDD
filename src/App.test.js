import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor : 'red'});
});

test('button turns blue when clicked', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor : 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {

  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeChecked();

});