import * as React from "react";
import * as s from "./button.scss";

export const Button = ({ onClick, children, style }) => {
  return (
    <button className={"button"} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
