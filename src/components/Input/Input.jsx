import React from 'react';
import * as s from './input.scss';

export const Input = ({ name, title, error, ...props }) => {
  return (
    <div className={`input-wrapper`}>
      <label
        className={`input-label ${error ? 'input-error' : ''}`}
        htmlFor={name}
      >
        {title}
      </label>
      <input
        className={`input-style ${error ? 'input-error' : ''}`}
        name={name}
        {...props}
      />
    </div>
  );
};
