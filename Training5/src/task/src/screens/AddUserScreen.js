import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/userActions';

const AddUserScreen = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addUser(firstName, lastName, email));

    history.push('/');
  };

  return (
    <>
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
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default AddUserScreen;
