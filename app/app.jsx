import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory, Route  } from 'react-router';
import routes from './routes.jsx';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducers from './reducers';

import { LoginPage } from './pages/login.jsx';

let store = applyMiddleware(thunk)(createStore)(reducers);

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render((
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <Route path='/login' component={LoginPage} />
          </Route>
        </Router>
      </Provider>
    ),
    document.querySelector('.app')
  );  
})
