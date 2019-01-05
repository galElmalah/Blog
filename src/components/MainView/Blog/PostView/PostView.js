import * as React from 'react';
import * as s from './postView.scss';
import { withRouter } from 'react-router';
const des = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const PostView = ({ posts, match }) => {
  console.log(posts, match.params.postId);
  const post = posts.find(post => post.id == match.params.postId) || {};
  console.log(post);
  return (
    <div className={'post-view'}>
      <header className={'post-header'}>
        <div>
          <h2 className={post.tags.length > 0 ? 'margin' : ''}>{post.title}</h2>
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
  );
};

export default withRouter(PostView);
