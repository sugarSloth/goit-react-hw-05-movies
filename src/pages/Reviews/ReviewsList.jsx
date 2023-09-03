import React from 'react';
import css from './Reviews.module.css';

const ReviewsList = ({ reviews }) => {
  const reviewsList = reviews.map(({ author, id, content }) => (
    <li key={id} className={css.item}>
      <h5>Author: {author}</h5>
      <p>{content}</p>
    </li>
  ));

  return <ul>{reviewsList}</ul>;
};

export default ReviewsList;
