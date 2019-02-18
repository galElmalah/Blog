import React, { Component } from 'react';
import * as s from './register.scss';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { someEmpty, errorMessages } from './utils';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      errors: {},
    };
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  setEmptyFields = () => {
    Object.entries(this.state).forEach(([key, value]) => {
      if (!value) {
        this.setState(prevState => ({
          errors: { ...prevState.errors, [key]: errorMessages(key) },
        }));
      }
    });
  };

  navigateBackToBlog = ({ success }) => {
    success && this.props.history.push('/blog');
  };

  onSubmit = () => {
    if (someEmpty(Object.values(this.state))) {
      this.setEmptyFields();
      return;
    }
    this.props.registerUser(this.state).then(this.navigateBackToBlog);
  };

  checkForErrors = fieldName => {
    return this.state.errors[fieldName];
  };

  render() {
    const { loading } = this.props;
    const { username, password, email } = this.state;
    return (
      <div className={'login-page'}>
        <h1 className={'page-title'}>Register</h1>

        <div className={'form-wrapper'}>
          <Input
            error={this.checkForErrors('email')}
            value={email}
            name={'email'}
            type={'email'}
            onChange={this.onChange}
            title={'Email'}
          />
          <Input
            error={this.checkForErrors('username')}
            value={username}
            name={'username'}
            type={'text'}
            onChange={this.onChange}
            title={'Username'}
          />
          <Input
            error={this.checkForErrors('password')}
            value={password}
            name={'password'}
            type={'password'}
            onChange={this.onChange}
            title={'Password'}
          />
          <div className={'login-btn'}>
            <Button onClick={this.onSubmit} theme={'dark'} loading={loading}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
