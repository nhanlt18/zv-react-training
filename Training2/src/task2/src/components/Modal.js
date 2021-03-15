import React from 'react';
import '../styles/modal.css';

const Modal = ({ show, children, onClose }) => {
  const renderBody = () => {
    return (
      <div className='modal' onClick={() => onClose()}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  return <>{show && renderBody()}</>;
};

export default Modal;
