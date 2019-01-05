import React, { Component } from 'react';
import { Navigation } from '../../../Header/Navigation';
import { Link } from 'react-router-dom';
import * as s from './cmsSideNavigation.scss';
const navLinks = [
  { label: 'create posts', link: 'cms/create-post' },
  { label: 'manage posts', link: 'cms/manage' },
  { label: 'manage posts 1', link: 'cms/manage' },
  { label: 'manage posts 2', link: 'cms/manage' },
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
        <Navigation currentlyActive={'create-post'}>
          {({ isActive, onClickHandler }) =>
            navLinks.map(navLink => (
              <Link
                key={navLink.label}
                to={`/${navLink.link}`}
                className={
                  (isActive(navLink.label) ? 'active' : '') + ' nav-link'
                }
                onClick={() => onClickHandler(navLink.label)}
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
