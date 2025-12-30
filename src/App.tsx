import { useCallback, useState } from 'react';
import nostaleLogo from '/img/logo.png';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  const handleCountIncrease = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleCountDecrease = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <div className='outer-cointainer'>
      <div className='title-row'>
        <img src={nostaleLogo} className="logo" alt="Nostale logo" />
        <h1>Odio questo gioco :)</h1>
      </div>
      <div className="row">
        <button className="mr-2" onClick={handleCountIncrease}>
          Click to increase: {count}
        </button>
        <button onClick={handleCountDecrease}>
          Click to decrease: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
