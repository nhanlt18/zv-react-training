import React from 'react';

import './App.css';
import CountDown from './components/CountDown';

const App = () => {
  return (
    <div className='App'>
      <h1>Simple Count Down Timer</h1>
      <CountDown />
    </div>
  );
};

export default App;
