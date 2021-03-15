import React from 'react';
import '../styles/modal.css';

const Modal = ({ show, children }) => {
  const renderBody = () => {
    return (
      <div className='modal'>
        <div className='modal-content'>{children}</div>
      </div>
    );
  };

  return <>{show && renderBody()}</>;
};

export default Modal;
