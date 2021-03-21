import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userGetAll } from '../ducks/modules/user';

const UserScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  // const { loading, users, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      history.push('/');
    } else {
      dispatch(userGetAll(token));
    }
  }, [token, history, dispatch]);

  return <div>User Detail Screen</div>;
};

export default UserScreen;
