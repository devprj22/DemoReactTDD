import { useState } from "react";

export function replaceCamelWithSpaces(colorName)
{
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        disabled={buttonDisabled} 
        style={{backgroundColor: buttonDisabled ? 'gray' :  buttonColor}}
        onClick={() => {
          setButtonColor(newButtonColor)
        }}
      > 
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input type="checkbox"
        id="disable-button-checkbox"
        onClick={
          (e) => setButtonDisabled(e.target.checked)
        } 
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
