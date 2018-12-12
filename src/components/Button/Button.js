import * as React from "react";
import * as s from "./button.scss";

const classes = {
  dark: " dark-btn"
};
export const Button = ({ onClick, children, style, disabled, theme }) => {
  return (
    <button
      className={
        "button" + (disabled ? " disabled " : "") + (classes[theme] || "")
      }
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
