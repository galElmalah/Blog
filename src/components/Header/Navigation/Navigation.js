import * as React from 'react';
import * as s from './navigation.scss';
export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.currentlyActive || 'home',
      isActive: this.isActive,
      onClickHandler: this.onClickHandler,
    };
  }

  isActive = id => this.state.activeTab === id;

  onClickHandler = index => {
    this.setState({ activeTab: index });
  };

  render() {
    return <>{this.props.children(this.state)}</>;
  }
}
