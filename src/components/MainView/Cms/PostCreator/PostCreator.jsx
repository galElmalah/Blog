import React, { Component } from 'react';
import * as s from './postCreator.scss';
import { Button } from '../../../Button/Button';
import { Input } from '../../../Input/Input';
import RichTextEditor from 'react-rte';
import { Spacer } from '../../../Spacer/Spacer';
import { initialPostState } from './utils';
export class PostCreator extends Component {
  constructor(props) {
    super(props);
    const { postId } = props.match.params;

    this.state = {
      ...initialPostState(postId, props.posts),
    };
  }

  onRichTextEditorChange = value => {
    const body = value.toString('html');
    this.setState({ body, value });
  };

  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  shouldAddTag = ({ keyCode }) => {
    const { tag, tags } = this.state;

    return keyCode === 13 && tag && !tags.includes(tag);
  };
  onEnterPress = e => {
    const { tag } = this.state;
    if (this.shouldAddTag(e)) {
      this.setState(
        prevState => ({
          tags: [...prevState.tags, tag],
        }),
        () => this.setState({ tag: '' })
      );
    }
  };

  onSubmit = () => {
    const { title, body, tags, id } = this.state;
    if (!(title && body && tags.length)) {
      this.setState({ error: 'Fields cannot be empty' });
      return;
    }
    this.setState({ error: '' });
    if (id) {
      this.props.updatePost({
        postId: id,
        post: { title, body, tags },
      });
    } else {
      this.props.createPost({ title, body, tags });
    }
  };

  removeTag = tagToRemove => () => {
    this.setState(prevState => ({
      tags: prevState.tags.filter(tag => tag !== tagToRemove),
    }));
  };

  render() {
    const { loading } = this.props;
    const { title, tags, tag, value, error, image } = this.state;
    console.log(image);
    return (
      <>
        {error && (
          <section className={'error'}>
            <p>{error}</p>
          </section>
        )}
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
        <div className={'image-input'}>
          <Input
            name={'image'}
            type={'file'}
            onChange={e => {
              const files = Array.from(e.target.files);
              const formData = new FormData();

              files.forEach((file, i) => formData.append(i, file));
              console.log(window.URL.createObjectURL(e.target.files[0]));
              this.setState({ image: formData });
            }}
            title={'Upload image'}
          />
        </div>
        <Spacer />
        <TagsList removeTag={this.removeTag} tags={tags} />
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

const TagsList = ({ tags, removeTag }) => (
  <section className={'tags-list'}>
    {tags.map((tag, index) => (
      <span onClick={removeTag(tag)} key={`${tag}-${index}`} className={'tag'}>
        {tag}
      </span>
    ))}
  </section>
);
