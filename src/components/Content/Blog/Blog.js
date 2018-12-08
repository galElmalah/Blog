import * as React from "react";
import * as s from "./blog.scss";
import { getPosts } from "./posts";
import { PostCard } from "./PostCard/PostCard";
import { connect } from "react-redux";
import { setPosts } from "../../../store/actionCreators";
import { Button } from "../../Button/Button";
export class Blog extends React.Component {
  componentDidMount() {
    getPosts().then(this.props.setPosts);
  }

  getLoadingStatePosts() {
    const { posts } = this.props;
    return posts.length ? posts : new Array(4).fill({});
  }
  render() {
    return (
      <>
        <h1 className={"page-title"}>Blog</h1>
        <section className={"posts-container"}>
          {this.getLoadingStatePosts().map((post, index) => (
            <PostCard {...post} key={index} />
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
    posts: state.posts
  };
};

const mapDispatchToProps = {
  setPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
