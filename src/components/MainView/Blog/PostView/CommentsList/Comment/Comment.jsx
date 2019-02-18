import React from 'react';
import * as s from './comment.scss';
const ArrowIcon = ({ onClick, direction }) => (
  <i
    onClick={onClick}
    className={`fa fa-angle-${direction}`}
    style={{ fontSize: '24px', cursor: 'pointer', margin: '0 5px' }}
  />
);

export const Comment = ({
  comment: { body, createdat, username, upvotes },
}) => (
  <li className={'comment'}>
    <div className={'comment-info'}>
      <span>
        <small>{username} </small>
        <ArrowIcon direction={'up'} />
        <ArrowIcon direction={'down'} />
        <small>{upvotes}</small>
      </span>
      <small>{new Date(createdat).toDateString()} </small>
    </div>
    <span className="divider" />
    {body}
  </li>
);
