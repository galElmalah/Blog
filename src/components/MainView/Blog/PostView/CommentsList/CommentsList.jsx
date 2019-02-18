import React, { Component } from 'react';
import * as s from './commentsList.scss';
import { Comment } from './Comment/Comment';
import { Loader } from '../../../../Loader/Loader';
import API from '../../../../../store/requester';
export class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      loading: false,
    };
  }

  componentDidMount() {
    const { postId } = this.props;
    this.setState({ loading: true });
    API.get(`/comments/${postId}`).then(({ data }) => {
      this.setState({
        loading: false,
        comments: data,
      });
    });
    // make a request to load the comments and show spinnet until they load
  }

  render() {
    const { comments, loading } = this.state;
    if (loading) {
      return <Loader />;
    }
    return (
      <ul className="comments">
        {comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </ul>
    );
  }
}
