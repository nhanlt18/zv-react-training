import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    setShow(true);
  };

  const handleClose = (e) => {
    setShow(false);
  };

  const renderBody = () => {
    return (
      <div className='modal'>
        <div className='modal-content'>
          <p>This is some contents of the modal</p>
          <span onClick={(e) => handleClose(e)} className='close'>
            &times;
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <button onClick={(e) => handleShow(e)}>Launch</button>
      {show && renderBody()}
    </>
  );
};

export default Modal;
