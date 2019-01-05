import React, { Component } from 'react';
import * as s from './cms.scss';
import { Route } from 'react-router-dom';
import PostCreator from '../../../containers/Cms/PostCreator';
import { PageContainer } from '../../PageContainer/PageContainer';
import { CmsSideNavigation } from './CmsSideNavigation/CmsSideNavigation';
export class Cms extends Component {
  onRichTextEditorChange = value => {
    this.setState({ body: value });
  };

  render() {
    return (
      <div className={'cms-page'}>
        <CmsSideNavigation />
        <PageContainer>
          <Route exact path="/cms/create-post" component={PostCreator} />
          <Route exact path="/cms/manage" component={PostCreator} />
        </PageContainer>
      </div>
    );
  }
}
