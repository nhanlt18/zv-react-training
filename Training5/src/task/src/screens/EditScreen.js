import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUser } from '../actions/userActions';

const EditScreen = ({ match, history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const { users, editingById, currentUserId } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getUser(match.params.id));

    if (users.length !== 0 && currentUserId) {
      const { first_name, last_name, email } = users.filter(
        (user) => user.id === currentUserId
      )[0];
      setFirstName(first_name);
      setLastName(last_name);
      setEmail(email);
    }
  }, [dispatch, match, users, currentUserId]);

  // useEffect(() => {
  //   if (users.length !== 0 && currentUserId) {
  //     const { first_name, last_name, email } = users.filter(
  //       (user) => user.id === currentUserId
  //     )[0];
  //     setFirstName(first_name);
  //     setLastName(last_name);
  //     setEmail(email);
  //   }
  // }, [users, currentUserId]);

  const submitHandler = () => {
    dispatch(editUser(currentUserId, firstName, lastName, email));

    history.push('/');
  };

  return (
    <>
      {editingById[currentUserId] ? (
        '...loading'
      ) : (
        <>
          <Link to='/'>
            <i className='fas fa-arrow-left'></i> Go Back
          </Link>
          <form onSubmit={submitHandler}>
            <label htmlFor='first-name'>First name:</label>
            <input
              name='first-name'
              value={firstName}
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
            />{' '}
            <br />
            <label htmlFor='last-name'>Last name:</label>
            <input
              name='last-name'
              value={lastName}
              type='text'
              onChange={(e) => setLastName(e.target.value)}
            />{' '}
            <br />
            <label htmlFor='email'>Email name:</label>
            <input
              name='email'
              value={email}
              type='text'
              onChange={(e) => setEmail(e.target.value)}
            />{' '}
            <br />
            <button type='submit'>Update</button>
          </form>
        </>
      )}
    </>
  );
};

export default EditScreen;
