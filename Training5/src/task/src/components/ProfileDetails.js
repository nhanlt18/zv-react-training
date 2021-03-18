import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProfileDetails.css';
import defaultAvatar from '../assets/avatar.svg';

const ProfileDetails = ({
  id,
  firstName,
  lastName,
  email,
  avatar = defaultAvatar,
  deleteHandler,
}) => {
  return (
    <>
      <td>
        <img alt='...' src={avatar}></img>
      </td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>
        <button onClick={deleteHandler}>
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
