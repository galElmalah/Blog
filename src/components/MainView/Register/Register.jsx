import React, { Component } from 'react';
import * as s from './register.scss';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = () => {
    this.props.loginUser(this.state);
  };

  render() {
    const { loading } = this.props;
    const { username, password, email } = this.state;
    return (
      <div className={'login-page'}>
        <h1 className={'page-title'}>Register</h1>

        <div className={'form-wrapper'}>
          <Input
            value={email}
            name={'email'}
            type={'email'}
            onChange={this.onChange}
            title={'Email'}
          />
          <Input
            value={username}
            name={'username'}
            type={'text'}
            onChange={this.onChange}
            title={'Username'}
          />
          <Input
            value={password}
            name={'password'}
            type={'password'}
            onChange={this.onChange}
            title={'Password'}
          />
          <div className={'login-btn'}>
            <Button onClick={this.onSubmit} theme={'dark'} loading={loading}>
              Sign-up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
