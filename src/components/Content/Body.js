import * as React from "react";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import { PageContainer } from "../PageContainer/PageContainer";
import * as a from "./body.scss";
import Blog from "./Blog/Blog";

const Check = ({ text }) => {
  console.log(text);
  return <h1 className={"page-title"}>{text}</h1>;
};
export const Body = () => (
  <div className={"page"}>
    <Header />
    <PageContainer>
      <Switch>
        <Route
          exact
          path="/home"
          render={props => <Check {...props} text={"home"} />}
        />
        <Route
          exact
          path="/about"
          render={props => <Check {...props} text={"about"} />}
        />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          path={"/blog/:id"}
          render={props => <Check {...props} text={"blog post"} />}
        />
        <Route
          exact
          path="/"
          render={props => <Check {...props} text={"home"} />}
        />
      </Switch>
    </PageContainer>
  </div>
);
