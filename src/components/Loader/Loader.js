import * as React from 'react';
import * as s from './loader.scss';

export const Loader = ({ disabled }) => (
  <div className={'lds-ring ' + (disabled ? 'disabled' : '')}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
