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
        onClick={
          (e) => setButtonDisabled(e.target.checked)
        } 
      />
    </div>
  );
}

export default App;
