import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUser } from '../actions/userActions';

const EditScreen = ({ match, history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(match.params.id));
  }, [dispatch, match]);

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    }
  }, [user]);

  const submitHandler = () => {
    dispatch(editUser(user.id, firstName, lastName, email));

    history.push('/');
  };

  return (
    <>
      {loading ? (
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
