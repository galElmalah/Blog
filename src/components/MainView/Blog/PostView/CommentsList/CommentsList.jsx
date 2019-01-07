import React, { Component } from 'react';
import * as s from './commentsList.scss';
import { Comment } from './Comment/Comment';

export class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['yeah thats cool', 'no i dont think thats a good idead'],
    };
  }

  render() {
    return (
      <ul className="comments">
        {this.state.comments.map(comment => {
          return <Comment comment={comment} />;
        })}
      </ul>
    );
  }
}
