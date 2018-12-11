import React, { Component } from "react";
import "./App.css";
import { MainView } from "./components/MainView/MainView";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <MainView />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
