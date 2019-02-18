import React, { Component } from 'react';
import * as s from './login.scss';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { errorMessages, someEmpty } from '../Register/utils';

const AlreadyLoggedInMessage = ({ username }) => {
  return (
    <div className={'loggedin-message'}>
      <h2>
        Seems like you are already logged in as <u>{username}</u>
      </h2>
    </div>
  );
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    const { loginUser } = this.props;
    if (someEmpty(Object.values(this.state))) {
      this.setEmptyFields();
      return;
    }
    loginUser(this.state).then(this.navigateBackToBlog);
  };

  checkForErrors = fieldName => {
    return this.state.errors[fieldName];
  };

  onKeyPressHandler = ({ key }) => key === 'Enter' && this.onSubmit();
  render() {
    const { loading, isLoggedIn, currentlyLoggedInUser } = this.props;
    const { username, password } = this.state;
    if (isLoggedIn) {
      return <AlreadyLoggedInMessage username={currentlyLoggedInUser} />;
    }

    return (
      <div className={'login-page'}>
        <h1 className={'page-title'}>Login</h1>

        <div className={'form-wrapper'} onKeyUp={this.onKeyPressHandler}>
          <Input
            error={this.checkForErrors('username')}
            value={username}
            name={'username'}
            type={'text'}
            onChange={this.onChange}
            title={'Username'}
          />
          <Input
            error={this.checkForErrors('password  ')}
            value={password}
            name={'password'}
            type={'password'}
            onChange={this.onChange}
            title={'Password'}
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
