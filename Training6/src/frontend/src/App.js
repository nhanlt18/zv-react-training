import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <main className='relative'>
        <Switch>
          <Route path='/' exact component={LoginScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/app' component={DashboardScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
