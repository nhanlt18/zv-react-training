import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../actions/userActions';

import ProfileDetails from '../components/ProfileDetails';

const Home = () => {
  const dispatch = useDispatch();

  const {
    users,
    fetchingUsers,
    currentUserId,
    fetchingUserDetails,
    addingUser,
    deletingById,
    editingById,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (users.length === 0 || editingById[currentUserId]) {
      dispatch(getUsers());
    }
  }, [dispatch, users, editingById, currentUserId]);

  const deleteHandler = (userId) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div>
      {fetchingUsers ||
      fetchingUserDetails ||
      addingUser ||
      deletingById[currentUserId] ||
      editingById[currentUserId] ? (
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
