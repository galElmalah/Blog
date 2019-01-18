import React, { Component } from 'react';
import * as s from './postsManager.scss';
import { Link } from 'react-router-dom';
export class PostsManager extends Component {
  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchPosts();
    }
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <h1>Manage Posts</h1>
        {posts.map(post => (
          <PostThumbnail
            key={post.id}
            {...post}
            onPostDelete={this.props.deletePost}
          />
        ))}
      </>
    );
  }
}

const PostThumbnail = ({ title, status = 'published', id, onPostDelete }) => (
  <div className="post-thumbnail">
    <span className="title">{title}</span>
    <StatusBanner status={status} />
    <ActionMenu>
      <div className={'actions-container'}>
        <div className={'action'} onClick={() => {}}>
          Publish post
        </div>
        <div className={'action'}>unpublish post</div>
        <div className={'action'}>
          <Link to={`/cms/create-post/${id}`}>edit post</Link>
        </div>
        <div className={'action'} onClick={() => onPostDelete(id)}>
          Delete post
        </div>
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
