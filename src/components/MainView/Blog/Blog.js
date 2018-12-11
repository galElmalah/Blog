import * as React from "react";
import * as s from "./blog.scss";
import { PostCard } from "./PostCard/PostCard";

import { Button } from "../../Button/Button";
import { TagContainer } from "../../Tag";

export default class Blog extends React.Component {
  componentDidMount() {
    const { posts } = this.props;
    if (!posts.length) {
      this.props.fetchPosts();
    }
  }

  renderLoadingState() {
    return new Array(4)
      .fill({})
      .map((post, index) => <PostCard {...post} key={`${index}-fake`} />);
  }

  render() {
    const { activeTags, loadingPosts, fetchPosts, posts } = this.props;
    console.log(loadingPosts);
    return (
      <>
        <h1 className={"page-title"}>Blog</h1>
        <div className={"activeTags"}>
          <TagContainer>
            {({ removeTagFilter }) => {
              return activeTags.map(tag => (
                <span onClick={() => removeTagFilter(tag)} className="tag">
                  <small>x</small> {tag}
                </span>
              ));
            }}
          </TagContainer>
        </div>
        <section className={"posts-container"}>
          {posts.map(post => (
            <PostCard {...post} key={post.id} />
          ))}
          {loadingPosts && this.renderLoadingState()}
        </section>
        <div className={"load-more-button"}>
          <Button
            onClick={fetchPosts}
            style={{ width: "100%" }}
            disabled={loadingPosts}
          >
            Load More Posts
          </Button>
        </div>
      </>
    );
  }
}
