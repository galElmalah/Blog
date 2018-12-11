import * as React from "react";
import * as s from "./header.scss";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const getMainNavigationActivePath = path => path.split("/")[1];

const navLinks = [
  { label: "home", link: "home" },
  { label: "about me", link: "about" },
  { label: "blog", link: "blog" }
];
const Header = ({ location }) => (
  <header className={"header"}>
    <div className="container">
      <Logo />
      <Navigation
        currentlyActive={getMainNavigationActivePath(location.pathname)}
      >
        {({ isActive, onClickHandler }) =>
          navLinks.map(navLink => (
            <Link
              key={navLink.label}
              to={`/${navLink.link}`}
              className={(isActive(navLink.label) ? "active" : "") + " tab"}
              onClick={() => onClickHandler(navLink.label)}
            >
              {navLink.label}
            </Link>
          ))
        }
      </Navigation>
    </div>
  </header>
);

export default withRouter(Header);
