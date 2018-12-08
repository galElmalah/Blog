import * as React from "react";
import * as s from "./header.scss";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const getMainActivePath = path => path.match(/\w+/)[0];

const links = ["home", "about", "blog"];
const Header = ({ location }) => (
  <header className={"header"}>
    <div className="container">
      <Logo />
      <Navigation currentlyActive={getMainActivePath(location.pathname)}>
        {({ activeTab, onClickHandler }) =>
          links.map(link => (
            <Link
              key={link}
              to={`/${link}`}
              className={(activeTab === link ? "active" : "") + " tab"}
              onClick={() => onClickHandler(link)}
            >
              {link}
            </Link>
          ))
        }
      </Navigation>
    </div>
  </header>
);

export default withRouter(Header);
