import * as React from "react";
import { truncate } from "../utils";
import * as s from "./post.scss";
import { Tag } from "../../../Tag";
const des = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export const Post = ({ title, imageUrl, tags = [] }) => (
  <div className={"post-card"}>
    <section className={"info"}>
      <h2 className={"post-title"}>{title}</h2>
      <span className="divider" />
      <div className={"image-container"}>
        <img className={"post-image"} src={imageUrl} alt={`${title} related`} />
      </div>
      <p className={"post-description"}>{truncate(des)}</p>
    </section>
    <button>GO read it</button>
    <span className="divider" />
    <div className={"tags"}>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  </div>
);
