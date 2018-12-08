import React, { Component } from "react";
import "./App.css";
import { Body } from "./components/Content/Body";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
