import React, { useState } from 'react';
import CloseButton from './components/CloseButton';
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
      <Modal show={show} onClose={onClose}>
        <h1>Title</h1>
        <p>The content</p>
        <CloseButton onClose={onClose} />
      </Modal>
      <button onClick={(e) => onShow(e)}>Launch</button>
    </div>
  );
};

export default App;
