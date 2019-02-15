import * as React from 'react';
import * as s from './header.scss';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserMenu from '../../containers/UserMenu';

const getMainNavigationActivePath = path => path.split('/')[1];

const navLinks = [
  { label: 'about me', link: 'about' },
  { label: 'blog', link: 'blog' },
];

const Header = ({ location }) => (
  <>
    <UserMenu />
    <header className={'header'}>
      <div className="container">
        <Logo />
        <div className={'tabs-navigation'}>
          <Navigation
            currentlyActive={getMainNavigationActivePath(location.pathname)}
          >
            {({ isActive, onClickHandler }) =>
              navLinks.map(({ link, label }) => (
                <Link
                  key={label}
                  to={`/${link}`}
                  className={(isActive(link) ? 'active' : '') + ' tab'}
                  onClick={() => onClickHandler(link)}
                >
                  {label}
                </Link>
              ))
            }
          </Navigation>
        </div>
      </div>
    </header>
  </>
);

export default withRouter(Header);
