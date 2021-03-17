import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../actions/userActions';

import ProfileDetails from '../components/ProfileDetails';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users, loading } = useSelector((state) => state.users);

  const reRender = () => {
    dispatch(getUsers());
  };

  return (
    <div>
      {loading ? (
        'loading...'
      ) : (
        <>
          <Link to='/users/add'>Add user</Link>
          <table>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {users.map(({ id, first_name, last_name, email }) => (
              <tr key={id}>
                <ProfileDetails
                  id={id}
                  firstName={first_name}
                  lastName={last_name}
                  email={email}
                  reRender={reRender}
                />
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  );
};

export default Home;
