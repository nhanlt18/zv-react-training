import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import { userGet } from '../ducks/modules/user';

const MyInfoScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const { loading, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    } else {
      dispatch(userGet(token));
    }
  }, [dispatch, history, token]);

  return loading ? (
    'Loading...'
  ) : error ? (
    error.message
  ) : (
    <div>
      <Header myInfo />
      <div className='flex justify-center items-center h-screen'>
        {loading === false ? <InfoCard info={user} /> : ''}
      </div>
    </div>
  );
};

export default MyInfoScreen;
