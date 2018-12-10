import * as React from "react";
import * as s from "./blog.scss";
import { getPosts } from "./posts";
import { PostCard } from "./PostCard/PostCard";
import { connect } from "react-redux";
import { setPosts } from "../../../store/actionCreators";
import { Button } from "../../Button/Button";
import { TagContainer } from "../../Tag";
export class Blog extends React.Component {
  componentDidMount() {
    const { posts } = this.props;
    if (!(posts[0] && posts[0].title)) {
      getPosts().then(this.props.setPosts);
    }
  }

  getLoadingStatePosts() {
    const { posts } = this.props;
    return posts.length ? posts : new Array(4).fill({});
  }

  render() {
    const { activeTags } = this.props;
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
          {this.getLoadingStatePosts().map(post => (
            <PostCard {...post} key={post.id} />
          ))}
        </section>
        <div className={"load-more-button"}>
          <Button
            onClick={() => getPosts().then(this.props.setPosts)}
            style={{ width: "100%" }}
          >
            Load More Posts
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: postsSelector(state),
    activeTags: Object.keys(state.filterByTags)
  };
};

const postsSelector = ({ posts, filterByTags }) => {
  return Object.keys(filterByTags).length > 0
    ? posts.filter(post => post.tags.some(tag => filterByTags[tag]))
    : posts;
};
const mapDispatchToProps = {
  setPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
