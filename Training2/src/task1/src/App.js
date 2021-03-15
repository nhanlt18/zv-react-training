import React, { useState } from 'react';
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
      <h1>React simple Modal</h1>
      <Modal show={show} />
      <button onClick={(e) => handleShow(e)}>Launch</button>
    </div>
  );
};

export default App;
