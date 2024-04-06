import './App.css';

import {useEffect, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count is now: ', count);
  }, [count]);

  const handleClick = event => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;
