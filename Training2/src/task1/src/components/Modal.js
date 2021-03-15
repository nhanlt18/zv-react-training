import React from 'react';
import '../styles/modal.css';

const Modal = ({ show }) => {
  const renderBody = () => {
    return (
      <div className='modal'>
        <div className='modal-content'>
          <h1>Modal Title</h1>
          <p>This is the sample content of the modal</p>
        </div>
      </div>
    );
  };

  return <>{show && renderBody()}</>;
};

export default Modal;
