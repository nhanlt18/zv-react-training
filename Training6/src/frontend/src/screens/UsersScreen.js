import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import { userGetAll } from '../ducks/modules/user';

const UsersScreen = ({ history, location }) => {
  const [chosenOne, setChosenOne] = useState(
    location.pathname.split('/').slice(-1)[0] - 1
  );
  const { path, url } = useRouteMatch();
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
        setTimeout(() => history.push('/app'), 400);
      }
    }
  }, [token, history, dispatch, users, errorUserAll]);

  const handleChoose = (idx) => {
    setChosenOne(idx);
  };

  return (
    <>
      <Header user />
      {loadingUserAll || loadingUserAll === undefined ? (
        <div>{'...Loading'}</div>
      ) : errorUserAll ? (
        errorUserAll.error
      ) : (
        <div className='justify-center flex mx-auto w-3/6 h-screen p-20'>
          <div className='mx-2 flex-1 border-r-4'>
            <ul>
              {users.map((user, index) => (
                <Link to={`${url}/${index + 1}`} key={index}>
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
          <div className='mx-2 flex-1'>
            <Switch>
              <Route path={`${path}/:id`}>
                <InfoCard info={users[chosenOne]} />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersScreen;
