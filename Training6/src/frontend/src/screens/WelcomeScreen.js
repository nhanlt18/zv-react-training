import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';

const WelcomeScreen = ({ history }) => {
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  return (
    <>
      <Header home />
      <div className='flex justify-center items-center h-screen'>
        <div className='text-9xl text-gray-500'>Welcome :)</div>
      </div>
    </>
  );
};

export default WelcomeScreen;
