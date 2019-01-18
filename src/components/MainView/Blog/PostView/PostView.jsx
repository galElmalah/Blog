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
        <header className={'post-header'}>
          <div>
            <h2 className={post.tags.length > 0 ? 'margin' : ''}>
              {post.title}
            </h2>
            {post.tags.map(tag => (
              <span key={tag} className={'tag'}>
                {tag}
              </span>
            ))}
          </div>
          <small>{post.date || new Date().toDateString()}</small>
        </header>
        <div>
          <span className="divider" />
        </div>
        <section
          className={'content'}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
      <Spacer />
      <CommentsList />
    </>
  );
};

export default withRouter(PostView);
