import { createSignal } from 'solid-js';
import './App.css';
import CalculatorPad from './components/CalculatorPad.jsx';

function App() {
  const [input, setInput] = createSignal('');
  const handleClick = (value) => {
    setInput(input() + value);
  };

  const handleEqual = () => {
    setInput(eval(input()).toString());
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className='App'>
      <div className='calculator'>
        <input className='display' type='text' value={input()} readOnly />
        <CalculatorPad
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
