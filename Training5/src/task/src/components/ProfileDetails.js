import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/ProfileDetails.css';
import defaultAvatar from '../assets/avatar.svg';
import { deleteUser } from '../actions/userActions';

const ProfileDetails = ({
  id,
  firstName,
  lastName,
  email,
  avatar = defaultAvatar,
  reRender,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteUser(id));
    reRender();
  };

  return (
    <>
      <td>
        <img alt='...' src={avatar}></img>
      </td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>
        <button onClick={handleDelete}>
          <i className='fas fa-times'></i>
        </button>
      </td>
      <td>
        <Link to={`/users/${id}/edit`}>
          <i className='fas fa-edit'></i>
        </Link>
      </td>
    </>
  );
};

export default ProfileDetails;
