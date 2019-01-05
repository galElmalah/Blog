import React, { Component } from 'react';
import { Navigation } from '../../../Header/Navigation';
import { Link } from 'react-router-dom';
import * as s from './cmsSideNavigation.scss';
const navLinks = [
  { label: 'manage posts', link: 'cms/manage' },
  { label: 'create posts', link: 'cms/create-post' },
];

export class CmsSideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    const { isVisible } = this.state;
    console.log('this.props.activeAtFirst', this.props.activeAtFirst);
    return (
      <div className={`side-navigation ${isVisible ? '' : 'hide'}`}>
        <div
          onClick={() =>
            this.setState(prevState => ({ isVisible: !prevState.isVisible }))
          }
          className={'controller'}
        >
          Menu
        </div>
        <h3> CMS </h3>
        <Navigation currentlyActive={this.props.activeAtFirst}>
          {({ isActive, onClickHandler }) =>
            navLinks.map(navLink => (
              <Link
                key={navLink.label}
                to={`/${navLink.link}`}
                className={
                  (isActive(navLink.link) ? 'active' : '') + ' nav-link'
                }
                onClick={() => onClickHandler(navLink.link)}
              >
                {navLink.label}
              </Link>
            ))
          }
        </Navigation>
      </div>
    );
  }
}
