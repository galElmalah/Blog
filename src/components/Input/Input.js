import React from 'react';
import * as s from './input.scss';

export const Input = ({ name, title, ...props }) => {
  return (
    <div className={'input-wrapper'}>
      <label className={'input-label'} htmlFor={name}>
        {title}
      </label>
      <input className={'input-style'} name={name} {...props} />
    </div>
  );
};
