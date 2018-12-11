import * as React from "react";
import * as s from "./button.scss";

export const Button = ({ onClick, children, style, disabled }) => {
  return (
    <button
      className={"button" + (disabled ? " disabled" : "")}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
