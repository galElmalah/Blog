import React, { Component } from "react";
import "./App.css";
import { Body } from "./components/Content/Body";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  }
}

export default App;
