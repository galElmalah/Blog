import React, { Component } from 'react';
import * as s from './login.scss';
import { Button } from '../../Button/Button';
import { Loader } from '../../Loader/Loader';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = () => {
    this.props.loginUser(this.state);
  };

  render() {
    const { loading } = this.props;
    const { username, password } = this.state;
    return (
      <div className={'login-page'}>
        <h1 className={'page-title'}>Login</h1>

        <div className={'form-wrapper'}>
          <label htmlFor={'username'}>Username</label>
          <input
            value={username}
            name={'username'}
            type={'text'}
            onChange={this.onChange}
          />
          <label htmlFor={'password'}>Password</label>
          <input
            value={password}
            name={'password'}
            type={'password'}
            onChange={this.onChange}
          />
          <div className={'login-btn'}>
            <Button onClick={this.onSubmit} theme={'dark'} loading={loading}>
              login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
