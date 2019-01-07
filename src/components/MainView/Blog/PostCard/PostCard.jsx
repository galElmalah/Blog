import * as React from 'react';
import { truncate, removeHtmlTags } from '../utils';
import * as s from './postCard.scss';
import { TagContainer } from '../../../Tag';
import { Link } from 'react-router-dom';
import { Button } from '../../../Button/Button';

export const PostCard = ({ title, imageUrl, tags = [], id, body = '' }) => (
  <div className={'post-card'}>
    <Link to={`/blog/${id}`}>
      <section className={'info'}>
        <div className={'image-container' + (!imageUrl ? ' loading' : '')}>
          {imageUrl && (
            <img
              className={'post-image'}
              src={imageUrl}
              alt={`${title} related`}
            />
          )}
        </div>
        <div className={'text padding'}>
          <h2 className={'post-title'}>{title}</h2>
          <p className={'post-description'}>{truncate(removeHtmlTags(body))}</p>
        </div>
      </section>
    </Link>
    <section className={'padding'}>
      <div className={'tags'}>
        <TagContainer>
          {({ addTagFilter }) => {
            return tags.map(tag => (
              <span key={tag} onClick={() => addTagFilter(tag)} className="tag">
                {tag}
              </span>
            ));
          }}
        </TagContainer>
      </div>
      <span className="divider" />

      <Link
        key={'share'}
        to={`/blog/${id}`}
        className={`btn ${!imageUrl ? ' disabled' : ''}`}
      >
        <Button disabled={!imageUrl}>share</Button>
      </Link>
      <Link
        key={'readMore'}
        to={`/blog/${id}`}
        className={`btn ${!imageUrl ? ' disabled' : ''}`}
      >
        <Button disabled={!imageUrl}>read more</Button>
      </Link>
    </section>
  </div>
);
