import React from 'react';

const CloseButton = ({ handleClose }) => {
  return <button onClick={(e) => handleClose(e)}>Close</button>;
};

export default CloseButton;
