import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

export default class Auth extends Component {
  state = {
    isLoggetIn: false,
    isSpinnerOn: false,
  };

  loginHandler = (inOutBoolean) => {
    if (inOutBoolean) {
      this.setState({ isSpinnerOn: true });
      setTimeout(
        () => this.setState({ isLoggetIn: true, isSpinnerOn: false }),
        2000
      );
    }
    this.setState({ isLoggetIn: false });
  };

  render = () => (
    <>
      {
        this.state.isLoggetIn
        ? <Logout onLogout={this.loginHandler} />
        : !this.state.isSpinnerOn && <Login onLogin={this.loginHandler} />
      }
      {this.state.isSpinnerOn && <Spinner />}
    </>
  );
}
