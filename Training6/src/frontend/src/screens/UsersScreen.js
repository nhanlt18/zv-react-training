import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import { userGetAll } from '../ducks/modules/user';

const UsersScreen = ({ history }) => {
  const [chosenOne, setChosenOne] = useState(0);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { loadingUserAll, users, errorUserAll } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!token) {
      history.push('/login');
    } else {
      if (!users && !errorUserAll) {
        dispatch(userGetAll(token));
      }

      if (errorUserAll && errorUserAll.code === 401) {
        setTimeout(() => history.push('/app'), 1500);
      }
    }
  }, [token, history, dispatch, users, errorUserAll]);

  const handleChoose = (idx) => {
    setChosenOne(idx);
  };

  return loadingUserAll || loadingUserAll === undefined ? (
    '...Loading'
  ) : errorUserAll ? (
    errorUserAll.error
  ) : (
    <div>
      <Header user />
      <div className='container flex mx-auto w-3/6 py-3 m-3'>
        <div className='flex-1'>
          <ul>
            {users.map((user, index) => (
              <Link to={`/app/users/${index + 1}`} key={index}>
                <li
                  className={`p-3 m-3 rounded cursor-pointer text-gray-500 hover:text-gray-400 ${
                    index === chosenOne ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => handleChoose(index)}
                >
                  {user.fullName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='flex-1'>
          {/* {users.map((user) => (
            <InfoCard info={user} />
          ))} */}
          <InfoCard info={users[chosenOne]} />
        </div>
      </div>
    </div>
  );
};

export default UsersScreen;
