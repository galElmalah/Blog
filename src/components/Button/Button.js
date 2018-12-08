import * as React from "react";
import * as s from "./button.scss";

export const Button = ({ onClick, children }) => {
  return (
    <button className={"button"} onClick={onClick}>
      {children}
    </button>
  );
};
