import * as React from "react";
import posts from "./posts";
import { Post } from "./Post/Post";
import * as s from "./blog.scss";

export const Blog = ({}) => {
  return (
    <>
      <h1 className={"page-title"}>Blog</h1>
      <section className={"posts-container"}>
        {posts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </section>
    </>
  );
};
