import * as React from 'react';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import { PageContainer } from '../PageContainer/PageContainer';
import * as a from './mainView.scss';
import Blog from '../../containers/Blog';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import PostView from '../../containers/Blog/PostView';
import { Cms } from './Cms/Cms';
import SecureRoute from '../../containers/SecureRoute';

const Check = ({ text, ...rest }) => {
  console.log(text, rest);
  return <h1 className={'page-title'}>{text}</h1>;
};

export const MainView = () => (
  <div className={'page'}>
    <Header />
    <PageContainer>
      <Switch>
        <Route
          exact
          path="/about"
          render={props => <Check {...props} text={'about'} />}
        />
        <Route exact path="/blog" component={Blog} />
        <Route exact path={'/blog/:postId'} component={PostView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={props => <Check {...props} text={'about me'} />}
        />
      </Switch>
    </PageContainer>
    <SecureRoute path="/cms" component={Cms} />
  </div>
);
