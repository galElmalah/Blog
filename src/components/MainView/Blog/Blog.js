import * as React from 'react';
import * as s from './blog.scss';
import { PostCard } from './PostCard/PostCard';
import { Button } from '../../Button/Button';
import { TagContainer } from '../../Tag';

export default class Blog extends React.Component {
  componentDidMount() {
    const { posts, loadingPosts } = this.props;
    if (!posts.length && !loadingPosts) {
      this.props.fetchPosts();
    }
  }

  render() {
    const { activeTags, loadingPosts, fetchPosts, posts } = this.props;
    return (
      <>
        <h1 className={'page-title'}>Blog</h1>
        <div className={'activeTags'}>
          <TagContainer>
            {({ removeTagFilter }) => {
              return activeTags.map(tag => (
                <span onClick={() => removeTagFilter(tag)} className="tag">
                  <small className={'tagDelete'}>x</small>
                  {tag}
                </span>
              ));
            }}
          </TagContainer>
        </div>
        <section className={'posts-container'}>
          <PostsList posts={posts} isLoading={loadingPosts} />
        </section>
        <LoadMoreButton onClick={fetchPosts} disabled={loadingPosts} />
      </>
    );
  }
}

const LoadMoreButton = ({ onClick, disabled }) => (
  <div className={'load-more-button'}>
    <Button
      onClick={onClick}
      theme={'dark'}
      style={{ width: '100%' }}
      disabled={disabled}
    >
      Load More Posts
    </Button>
  </div>
);

const loadingState = () => {
  return new Array(4)
    .fill({})
    .map((post, index) => <PostCard {...post} key={`${index}-fake`} />);
};

const PostsList = ({ posts, isLoading }) => {
  return (
    <>
      {posts.map(post => (
        <PostCard {...post} key={post.id} />
      ))}
      {isLoading && loadingState()}
    </>
  );
};
