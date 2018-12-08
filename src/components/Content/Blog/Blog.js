import * as React from "react";
import * as s from "./blog.scss";
import { getPosts } from "./posts";
import { PostCard } from "./PostCard/PostCard";

export class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: new Array(4).fill({})
    };
  }
  componentDidMount() {
    getPosts(posts => this.setState({ posts }));
  }
  render() {
    return (
      <>
        <h1 className={"page-title"}>Blog</h1>
        <section className={"posts-container"}>
          {this.state.posts.map((post, index) => (
            <PostCard {...post} key={index} />
          ))}
        </section>
      </>
    );
  }
}
