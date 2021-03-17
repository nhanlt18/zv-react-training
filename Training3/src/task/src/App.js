import React, { useState } from 'react';
import CloseButton from './components/CloseButton';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);
  const [keyLog, setKeyLog] = useState([]);

  const onShow = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const onKeyDown = (e) => {
    const key = e.code.startsWith('Key') ? e.code[3] : e.code;
    setKeyLog([...keyLog, key]);
  };

  return (
    <div className='App'>
      <h1>React Simple Key Logger</h1>
      <Modal show={show} onClose={onClose} onKeyDown={onKeyDown}>
        <h1>Title</h1>
        <form>
          <label htmlFor='input'>Input</label>
          <br />
          <textarea name='input' rows='4' cols='50' />
        </form>
        <CloseButton onClose={onClose} />
      </Modal>
      <button onClick={(e) => onShow(e)}>Open Modal</button>
      {keyLog.length > 0 ? (
        <p>Your actions have been recorded &#128520;: {keyLog.join('-')}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
