import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import { userGet } from '../ducks/modules/user';

const MyInfoScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const { loadingUser, user, errorUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    } else {
      if (!user) {
        dispatch(userGet(token));
      }
    }
  }, [dispatch, history, token, user]);

  return loadingUser || loadingUser === undefined ? (
    'Loading...'
  ) : errorUser ? (
    errorUser.error
  ) : (
    <div>
      <Header myInfo />
      <div className='flex justify-center items-center h-screen'>
        {<InfoCard info={user} />}
      </div>
    </div>
  );
};

export default MyInfoScreen;
