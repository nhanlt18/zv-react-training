import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import MyInfoScreen from './screens/MyInfoScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import UsersScreen from './screens/UsersScreen';
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  return (
    <Router>
      <main className='relative'>
        <Switch>
          <Route path='/' exact component={WelcomeScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/app' exact component={WelcomeScreen} />
          <Route path='/app/my-info' exact component={MyInfoScreen} />
          <Route path='/app/users' component={UsersScreen} />
          <Route path='/app/*' component={NotFoundScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
