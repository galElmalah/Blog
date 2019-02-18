import React from 'react';
import * as s from './userMenu.scss';
import { Link } from 'react-router-dom';

const UserDisplay = ({ username }) => {
  return (
    <p className={'username'}>
      Logged in as <u>{username}</u>
    </p>
  );
};

const NotLoggedInMenuDisplay = () => {
  return (
    <>
      <Link key={'login'} to={`/login`} className={'user-menu-link'}>
        {'login'}
      </Link>
      <Link key={'register'} to={`/register`} className={'user-menu-link'}>
        {'register'}
      </Link>
    </>
  );
};

export const UserMenu = ({ currentlyLoggedInUser, isAdmin, logoutUser }) => {
  return (
    <div className={'user-menu'}>
      {currentlyLoggedInUser ? (
        <>
          <UserDisplay username={currentlyLoggedInUser} />
          <button className={'log-out-btn'} onClick={logoutUser}>
            {'LOG OUT'}
          </button>
        </>
      ) : (
        <NotLoggedInMenuDisplay />
      )}
      {isAdmin && (
        <Link key={'cms'} to={`/cms`} className={'user-menu-link'}>
          {'CMS'}
        </Link>
      )}
    </div>
  );
};
