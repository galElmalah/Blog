import * as React from 'react';
import * as s from './postView.scss';
import { withRouter } from 'react-router';
import { CommentsList } from './CommentsList/CommentsList';
import { Spacer } from '../../../Spacer/Spacer';

const PostView = ({ posts, match }) => {
  const post = posts.find(post => post.id == match.params.postId) || {};

  return (
    <>
      <div className={'post-view'}>
        <PostHeader post={post} />
        <div>
          <span className="divider" />
        </div>
        <section
          className={'content'}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
      <Spacer />
      <CommentsList postId={match.params.postId} />
    </>
  );
};

const PostHeader = ({ post: { tags = [], date, title } }) => (
  <header className={'post-header'}>
    <div>
      <h2 className={tags && tags.length > 0 ? 'margin' : ''}>{title}</h2>
      {tags.map(tag => (
        <span key={tag} className={'tag'}>
          {tag}
        </span>
      ))}
    </div>
    <small>{date || new Date().toDateString()}</small>
  </header>
);

export default withRouter(PostView);
