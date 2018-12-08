import * as React from "react";
import * as s from "./header.scss";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const getMainNavigationActivePath = path => path.split("/")[1];

const navLinks = [
  { title: "home", link: "home" },
  { title: "about me", link: "about" },
  { title: "blog", link: "blog" }
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
              key={navLink.title}
              to={`/${navLink.link}`}
              className={(isActive(navLink.title) ? "active" : "") + " tab"}
              onClick={() => onClickHandler(navLink.title)}
            >
              {navLink.title}
            </Link>
          ))
        }
      </Navigation>
    </div>
  </header>
);

export default withRouter(Header);
