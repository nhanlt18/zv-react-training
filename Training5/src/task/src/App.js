import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './screens/Home';
import EditScreen from './screens/EditScreen';
import AddUserScreen from './screens/AddUserScreen';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <header className='app-header'>
          <h1>Simple Management Application Using Redux</h1>
        </header>
        <main className='app-main'>
          <div className='main-container'>
            <Route path='/' exact component={Home} />
            <Route path='/users/:id/edit' exact component={EditScreen} />
            <Route path='/users/add' exact component={AddUserScreen} />
          </div>
        </main>
        <footer className='app-footer'>
          <h2>Footer</h2>
        </footer>
      </div>
    </Router>
  );
};

export default App;
