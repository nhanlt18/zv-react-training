import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import MyInfoScreen from './screens/MyInfoScreen';
import UsersScreen from './screens/UsersScreen';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  return (
    <Router>
      <main>
        <Route path='/login' exact component={LoginScreen} />
        <Route path='/app' exact component={WelcomeScreen} />
        <Route path='/app/my-info' exact component={MyInfoScreen} />
        <Route path='/app/users' exact component={UsersScreen} />
        <Route path='/app/users/:id' exact component={UserScreen} />
      </main>
    </Router>
  );
}

export default App;
