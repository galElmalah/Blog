import * as React from "react";
import { truncate } from "../utils";
import * as s from "./postCard.scss";
import { TagContainer } from "../../../Tag";
import { Link } from "react-router-dom";
import { Button } from "../../../Button/Button";
import { Loader } from "../../../Loader/Loader";

const des = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const onClick = (id, history) => () => {
  // history.push(`blog/${id}`);
  // console.log(id);
};

export const PostCard = ({ title, imageUrl, tags = [], id, history }) => (
  <div className={"post-card"} onClick={onClick(id, history)}>
    <Link to={`/blog/${id}`}>
      <section className={"info"}>
        <div className={"image-container"}>
          {imageUrl ? (
            <img
              className={"post-image"}
              src={imageUrl}
              alt={`${title} related`}
            />
          ) : (
            <Loader />
          )}
        </div>
        <div className={"text padding"}>
          <h2 className={"post-title"}>{title}</h2>
          <p className={"post-description"}>{truncate(des)}</p>
        </div>
      </section>
    </Link>
    <section className={"padding"}>
      <Link to={`/blog/${id}`}>
        <Button>read more</Button>
      </Link>
      <span className="divider" />
      <div className={"tags"}>
        <TagContainer>
          {({ addTagFilter }) => {
            return tags.map(tag => (
              <span onClick={() => addTagFilter(tag)} className="tag">
                {tag}
              </span>
            ));
          }}
        </TagContainer>
      </div>
    </section>
  </div>
);
