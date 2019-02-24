import React from 'react';
import * as s from './register.scss';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import FormManager from '../../FormManager';

const formInitialData = {
  username: '',
  email: '',
  password: '',
};

export const Register = ({ loading, registerUser }) => {
  return (
    <div className={'login-page'}>
      <h1 className={'page-title'}>Register</h1>

      <FormManager
        formInitialData={formInitialData}
        onSubmitAction={registerUser}
      >
        {({
          formData,
          onChange,
          onKeyPressHandler,
          onSubmit,
          checkForErrors,
        }) => (
          <div className={'form-wrapper'} onKeyUp={onKeyPressHandler}>
            <Input
              error={checkForErrors('email')}
              value={formData.email}
              name={'email'}
              type={'email'}
              onChange={onChange}
              title={'Email'}
            />
            <Input
              error={checkForErrors('username')}
              value={formData.username}
              name={'username'}
              type={'text'}
              onChange={onChange}
              title={'Username'}
            />
            <Input
              error={checkForErrors('password')}
              value={formData.password}
              name={'password'}
              type={'password'}
              onChange={onChange}
              title={'Password'}
            />
            <div className={'login-btn'}>
              <Button onClick={onSubmit} theme={'dark'} loading={loading}>
                Sign up
              </Button>
            </div>
          </div>
        )}
      </FormManager>
    </div>
  );
};
