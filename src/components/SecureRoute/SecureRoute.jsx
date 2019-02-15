import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PageContainer } from '../PageContainer/PageContainer';
import { Button } from '../Button/Button';
import * as s from './secureRoute.scss';

const UnauthorizePage = () => {
  return (
    <PageContainer>
      <span className="unauthorize-page">
        <h1 className={'page-title'}>Get the fuck out of here!</h1>
        <p>
          Seems like you are not logged in or dont have the right permissions
        </p>
        <p>Try logging in or registering and coming back.</p>
        <Link to="/login">
          <Button theme="dark">Log in</Button>
        </Link>
        <Link to="/register">
          <Button theme="dark">Register</Button>
        </Link>
      </span>
    </PageContainer>
  );
};

export const SecureRoute = ({
  token,
  isLoggedIn,
  path,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      path={path}
      render={props => {
        if (!token || !isLoggedIn) {
          return <UnauthorizePage />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
