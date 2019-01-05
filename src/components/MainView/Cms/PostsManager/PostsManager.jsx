import React, { Component } from 'react';
import * as s from './postsManager.scss';

export class PostsManager extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <h1>Manage</h1>
        {posts.map(post => (
          <PostThumbnail {...post} />
        ))}
      </>
    );
  }
}

const PostThumbnail = ({ title, status = 'published' }) => (
  <div className="post-thumbnail">
    <span className="title">{title}</span>
    <StatusBanner status={status} />
    <ActionMenu>
      <div className={'actions-container'}>
        <div className={'action'} onClick={() => {}}>
          Publish post
        </div>
        <div className={'action'}>unpublish post</div>
        <div className={'action'}>edit post</div>
        <div className={'action'}>delete post</div>
      </div>
    </ActionMenu>
  </div>
);

const StatusBanner = ({ status }) => (
  <span className={`status ${status.toLowerCase()}`}>{status}</span>
);

class ActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onActionItemClick = () => {
    this.setState({ isVisible: false });
  };

  onDotsClick = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className={'actions'}>
        {isVisible && (
          <div className={'actions-menu'} onClick={this.onActionItemClick}>
            {this.props.children}
          </div>
        )}
        <div className={'menu'} onClick={this.onDotsClick}>
          <img className={'dots'} src={'/three-dots.svg'} />
        </div>
      </div>
    );
  }
}
