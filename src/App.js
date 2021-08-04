import { useState } from "react";

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        disabled={buttonDisabled} 
        style={{backgroundColor: buttonColor}}
        onClick={() => {
          setButtonColor(newButtonColor)
        }}
      > 
        Change to {newButtonColor}
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
