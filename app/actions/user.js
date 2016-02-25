import axios from 'axios';

import {
  ON_USER_LOGIN_END,
  ON_USER_LOGIN_START
} from '../constants';

const onUserLoginEnd = user => {
  return {
    type: ON_USER_LOGIN_END,
    user
  }
}

const onUserLoginStart = (username, password) => {
  return dispatch => {
    return axios.post("/api/sessions", {
      username,
      password
    })
      .then(res => {
        dispatch(onUserLoginEnd(res.data))
      })
  }
}

// Public Functions 
export const userLogin = (username, password) => {
  return dispatch => {
    dispatch(onUserLoginStart(username, password));
  }
}
