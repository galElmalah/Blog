import * as React from "react";
import * as s from "./tag.scss";
export const Tag = ({ children }) => (
  <span onClick={() => console.log(children)} className="tag">
    {children}
  </span>
);
