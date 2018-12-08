import * as React from "react";
import * as s from "./navigation.scss";
export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.currentlyActive || "home",
      onClickHandler: this.onClickHandler
    };
  }

  onClickHandler = index => {
    this.setState({ activeTab: index });
  };

  render() {
    return (
      <div className={"navigation"}>{this.props.children(this.state)}</div>
    );
  }
}
