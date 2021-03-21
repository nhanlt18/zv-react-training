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
    </>
  );
};

export default WelcomeScreen;
