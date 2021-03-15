import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className='App'>
      <h1>React Simple Modal</h1>
      <Modal show={show} onClose={onClose} />
      <button onClick={onShow}>Launch</button>
    </div>
  );
};

export default App;
