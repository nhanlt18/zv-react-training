import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../actions/userActions';

import ProfileDetails from '../components/ProfileDetails';

const Home = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.user.users);
  const { creating } = useSelector((state) => state.user.add);
  const { loading: editLoading } = useSelector((state) => state.user.edit);
  const { loading: deleteLoading } = useSelector((state) => state.user.delete);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [dispatch, users]);

  const deleteHandler = (userId) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div>
      {loading || creating || editLoading || deleteLoading ? (
        'loading...'
      ) : (
        <>
          <Link to='/users/add'>Add user</Link>
          <table>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            {users.map(({ id, first_name, last_name, email }) => (
              <tbody key={id}>
                <tr>
                  <ProfileDetails
                    id={id}
                    firstName={first_name}
                    lastName={last_name}
                    email={email}
                    deleteHandler={() => deleteHandler(id)}
                  />
                </tr>
              </tbody>
            ))}
          </table>
        </>
      )}
    </div>
  );
};

export default Home;
