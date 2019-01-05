import React, { Component } from 'react';
import * as s from './postCreator.scss';
import { Button } from '../../../Button/Button';
import { Input } from '../../../Input/Input';

import RichTextEditor from 'react-rte';
import { Spacer } from '../../../Spacer/Spacer';

export class PostCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      value: RichTextEditor.createEmptyValue(),
      tags: [],
      tag: '',
    };
  }

  onRichTextEditorChange = value => {
    const body = value.toString('html');
    this.setState({ body, value });
  };

  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  onEnterPress = e => {
    const { tag } = this.state;
    if (e.keyCode === 13 && tag) {
      this.setState(
        prevState => ({
          tags: [...prevState.tags, tag],
        }),
        () => this.setState({ tag: '' })
      );
    }
  };

  onSubmit = () => {
    const { title, body, tags } = this.state;
    this.props.createPost({ title, body, tags });
  };

  removeTag = tagToRemove => () => {
    this.setState(prevState => ({
      tags: prevState.tags.filter(tag => tag !== tagToRemove),
    }));
  };

  render() {
    const { loading } = this.props;
    const { title, body, tags, tag, value } = this.state;
    return (
      <>
        <Input
          value={title}
          name={'title'}
          type={'text'}
          onChange={this.onInputChange}
          title={'Post title'}
        />
        <Spacer />
        <Input
          value={tag}
          name={'tag'}
          type={'text'}
          onChange={this.onInputChange}
          onKeyUp={this.onEnterPress}
          title={'Enter tag'}
        />
        <Spacer />
        <section className={'tags-list'}>
          {tags.map((tag, index) => (
            <span
              onClick={this.removeTag(tag)}
              key={`${tag}-${index}`}
              className={'tag'}
            >
              {tag}
            </span>
          ))}
        </section>

        <Spacer />

        <RichTextEditor
          name="body"
          value={value}
          onChange={this.onRichTextEditorChange}
        />

        <Spacer />

        <div className={'login-btn'}>
          <Button onClick={this.onSubmit} theme={'dark'} loading={loading}>
            save post
          </Button>
        </div>
      </>
    );
  }
}
