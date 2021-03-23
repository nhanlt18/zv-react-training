import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import Header from '../components/Header';

import MyInfoScreen from './MyInfoScreen';
import NotFoundScreen from './NotFoundScreen';
import UsersScreen from './UsersScreen';
import WelcomeScreen from './WelcomeScreen';

const DashboardScreen = ({ history, location }) => {
  const { path } = useRouteMatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={path}>
          <WelcomeScreen />
        </Route>
        <Route exact path={`${path}/my-info`}>
          <MyInfoScreen />
        </Route>
        <Route path={`${path}/users`}>
          <UsersScreen/>
        </Route>
        <Route path={`${path}/*`}>
          <NotFoundScreen />
        </Route>
      </Switch>
    </>
  );
};

export default DashboardScreen;
