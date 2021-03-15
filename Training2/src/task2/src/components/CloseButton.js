import React from 'react';

const CloseButton = ({ onClose }) => {
  return <button onClick={(e) => onClose(e)}>Close</button>;
};

export default CloseButton;
