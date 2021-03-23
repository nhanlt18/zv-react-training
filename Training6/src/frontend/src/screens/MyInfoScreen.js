import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfoCard from '../components/InfoCard';
import { userGet } from '../ducks/modules/user';

const MyInfoScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const { loadingUser, user, errorUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.fullName) {
      dispatch(userGet(token));
    }
  }, [dispatch, history, token, user]);

  return loadingUser || loadingUser === null ? (
    'Loading...'
  ) : errorUser ? (
    errorUser.error
  ) : (
    <div>
      <div className='flex justify-center items-center h-screen'>
        {<InfoCard info={user} />}
      </div>
    </div>
  );
};

export default MyInfoScreen;
