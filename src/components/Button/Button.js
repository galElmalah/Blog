import * as React from 'react';
import * as s from './button.scss';
import { Loader } from '../Loader/Loader';
const classes = {
  dark: ' dark-btn',
};
export const Button = ({
  onClick,
  children,
  style,
  disabled,
  theme,
  loading,
}) => {
  return (
    <button
      className={
        'button' +
        (disabled || loading ? ' disabled ' : '') +
        (classes[theme] || '')
      }
      onClick={onClick}
      style={style}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};
