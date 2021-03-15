import React from 'react';
import '../styles/alert.css';

const Alert = ({ type, message }) => {
  return (
    <div className={`${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
