import React, { useState, useEffect } from 'react';

import Alert from './Alert';
import '../styles/countdown.css';

const CountDown = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState('');
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const countDownTimer = setInterval(() => {
      if (running) setCount((c) => c - 1);
    }, 1000);

    return () => clearInterval(countDownTimer);
  }, [running]);

  useEffect(() => {
    if (count <= 0) {
      setRunning(false);
    }
  }, [count]);

  const onStart = () => {
    if (!input) {
      setError(true);
      setWarning('Please input a number');
      setSuccess(false);
    } else if (Number.isNaN(Number(input))) {
      setError(true);
      setWarning('Invalid input. Must be a number');
      setSuccess(false);
    } else if (Number(input) < 0) {
      setError(true);
      setWarning('Number must be greater than zero');
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setRunning(true);
      setCount(Number(input));
    }
  };

  const onToggle = () => {
    setRunning(!running);
  };

  return (
    <div className='CountDown'>
      <form>
        <label htmlFor='input'>Start: </label>
        <input
          type='text'
          name='input'
          value={input}
          placeholder='Enter a number'
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {<button onClick={onStart}>{success ? 'Start again' : 'Start'}</button>}

      {error && <Alert message={warning} type='warning' />}
      {success && (
        <div>
          <div id='count'>{count}</div>
          <button onClick={onToggle}>{running ? 'Stop' : 'Continue'}</button>
        </div>
      )}
    </div>
  );
};

export default CountDown;
