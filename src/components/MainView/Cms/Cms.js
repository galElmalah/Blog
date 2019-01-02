import React, { Component } from 'react';
import * as s from './cms.scss';
import { Navigation } from '../../Header/Navigation';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import RichTextEditor from 'react-rte';
export class Cms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: RichTextEditor.createEmptyValue(),
      tags: [],
    };
  }

  onRichTextEditorChange = value => {
    console.log(value);
    this.setState({ body: value });
  };

  render() {
    const navLinks = [
      { label: 'create posts', link: 'create-post' },
      { label: 'manage posts', link: 'manage' },
    ];
    const { loading } = this.props;
    const { title, body, tags } = this.state;
    return (
      <div className={'cms-page'}>
        <div className={'side-navigation'}>
          <Navigation currentlyActive={'post'}>
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
        <RichTextEditor
          name="body"
          value={body}
          onChange={this.onRichTextEditorChange}
        />
        <div className={'login-btn'}>
          <Button onClick={this.onSubmit} theme={'dark'} loading={loading}>
            save post
          </Button>
        </div>
      </div>
    );
  }
}
