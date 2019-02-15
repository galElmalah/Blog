import * as React from 'react';
import * as s from './logo.scss';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/">
    <h1 className={'logo'}>gal elmalah</h1>
  </Link>
);
