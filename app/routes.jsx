import React from 'react';
import { Route } from 'react-router'

import { LoginPage } from './pages/login.jsx';
import { DashBoardPage } from './pages/dashboard.jsx';

// <Route path="/dashboard" component={DashBoardPage}/>

const App = props => {
  return (
    <div>
      {this.props.children}
    </div>
  )
}

export default (
  <Route path='/' component={App}>
    <Route path='/login' component={LoginPage} />
  </Route>
);
