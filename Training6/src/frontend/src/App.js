import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import MyInfoScreen from './screens/MyInfoScreen';
import UsersScreen from './screens/UsersScreen';
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  return (
    <Router>
      <main>
        <Route path='/login' exact component={LoginScreen} />
        {/* TODO: app/* will redirect to login screen */}
        <Route path='/app' component={WelcomeScreen} />
        <Route path='/app/my-info' exact component={MyInfoScreen} />
        <Route path='/app/users' component={UsersScreen} />
        {/* TODO: 404 screen and app/* redirect to 404 screen if user have logged in */}
      </main>
    </Router>
  );
}

export default App;
