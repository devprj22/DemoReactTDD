import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', {name : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`});
  expect(colorButton).toHaveStyle({backgroundColor : 'MediumVioletRed'});
});

test('button turns Midnight Blue when clicked and then back to Medium Violet Red', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', {name : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`});
  
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor : 'MidnightBlue'});
  expect(colorButton.textContent).toBe(`Change to ${replaceCamelWithSpaces('MediumVioletRed')}`);

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor : 'MediumVioletRed'});
  expect(colorButton.textContent).toBe(`Change to ${replaceCamelWithSpaces('MidnightBlue')}`);
});

test('initial conditions', () => {

  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});
  expect(checkbox).not.toBeChecked();

});

test('clicking of checkbox', () => {

  render(<App />);

  const colorButton = screen.getByRole('button', {name : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // Testing the toggling
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to Medium violet red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'MediumVioletRed'});
});

test('Clicked disabled button has gray background and reverts to Midnight Blue', () =>{
  render(<App />);

  const colorButton = screen.getByRole('button', {name : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor : 'MidnightBlue'});
});

describe('spaces before camel case capital letters', () => {
    test('Works for no inner capital letters', () => {
      expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });

    test('Works for one inner capital letters', () => {
      expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test('Works for multiple inner capital letters', () => {
      expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
});