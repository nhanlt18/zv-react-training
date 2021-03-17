import React, { useRef, useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({ show, children, onClose, onKeyDown }) => {
  const modalEl = useRef(null);

  useEffect(() => {
    if (show) modalEl.current.focus();
  }, [show]);

  const renderBody = () => {
    return (
      <div
        tabIndex='0' // added tabIndex attribute to make a div focusable
        ref={modalEl}
        className='modal'
        onClick={() => onClose()}
        onKeyDown={onKeyDown}
      >
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  return <>{show && renderBody()}</>;
};

export default Modal;
