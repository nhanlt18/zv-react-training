import React from 'react';
import '../styles/modal.css';

const Modal = ({ show, onClose }) => {
  const renderBody = () => {
    return (
      <div className='modal' onClick={() => onClose()}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <h1>Modal Title</h1>
          <p>This is the sample content of the modal</p>
        </div>
      </div>
    );
  };

  return <>{show && renderBody()}</>;
};

export default Modal;
