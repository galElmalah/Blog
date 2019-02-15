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
  type,
}) => {
  return (
    <button
      type={type}
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
