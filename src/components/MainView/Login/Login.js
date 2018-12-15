import React, { Component } from "react";
import * as s from "./login.scss";
import { Button } from "../../Button/Button";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = () => {
    // api call with user name and pass
    
    console.log(this.state);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className={"login-page"}>
        <h1 className={"page-title"}>Login</h1>
        <div className={"form-wrapper"}>
          <label for={"username"}>Username</label>
          <input
            value={username}
            name={"username"}
            type={"text"}
            onChange={this.onChange}
          />
          <label for={"password"}>Password</label>
          <input
            value={password}
            name={"password"}
            type={"password"}
            onChange={this.onChange}
          />
          <div className={"submit-btn"}>
            <Button onClick={this.onSubmit} theme={"dark"}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
