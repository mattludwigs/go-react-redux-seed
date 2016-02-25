import { Map } from 'immutable';

import { ON_USER_LOGIN_END, ON_USER_LOGIN_START } from '../constants';

const initState = Map({
  user: {
    username: null,
    id: null
  },
  loading: false
});


export const currentUser = (state = initState, action) => {
  switch (action.type) {
    case ON_USER_LOGIN_END:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}

