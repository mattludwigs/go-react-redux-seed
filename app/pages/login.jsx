import React from 'react';
import { connect } from 'react-redux';

import { userLogin } from '../actions/user';

import { Input } from '../components/input.jsx';
import { Button } from '../components/button.jsx';

const loginPage = React.createClass({

  onLoginIn(event) {
    event.preventDefault();
    const form = event.currentTarget;
    
    const payload = {
      username: form.username.value,
      password: form.password.value
    }

    this.props.dispatch(userLogin(form.username.value, form.password.value))
  },

  render() {
    console.log(this);
    return (
      <form onSubmit={this.onLoginIn}>

        <Input
          name='username'
          type='text'
          placeholder='Input' />

        <Input
          name='password'
          type='password'
          placeholder='password' />

        <Input
          type='submit' />  

      </form>
    )
  }

});

const select = state => state.currentUser;

export const LoginPage = connect(select)(loginPage);
