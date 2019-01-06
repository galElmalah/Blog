import React from 'react';

export const Comment = ({ comment }) => (
  <li className={'comment'}>
    <div className={'comment-info'}>action section ^</div>
    <span className="divider" />
    {comment}
  </li>
);
