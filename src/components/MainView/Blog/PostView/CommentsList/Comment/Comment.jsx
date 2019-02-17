import React from 'react';
import * as s from './comment.scss';
export const Comment = ({ comment: { body, createdat, username } }) => (
  <li className={'comment'}>
    <div className={'comment-info'}>
      <small>{username} </small>
      <small>{new Date(createdat).toDateString()} </small>
    </div>
    <span className="divider" />
    {body}
  </li>
);
