import React, { useState } from 'react';
import CloseButton from './components/CloseButton';
import Modal from './components/Modal';

const App = () => {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    setShow(true);
  };

  const handleClose = (e) => {
    setShow(false);
  };

  return (
    <div>
      <h1>React Simple Modal</h1>
      <Modal show={show} handleClose={handleClose}>
        <h1>Hello</h1>
        <CloseButton handleClose={handleClose} />
      </Modal>
      <button onClick={(e) => handleShow(e)}>Launch</button>
    </div>
  );
};

export default App;
