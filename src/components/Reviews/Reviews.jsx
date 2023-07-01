import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'tmdbApi/tmdb-api';
import scss from './Reviews.module.scss';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const updateReviews = useCallback(() => {
    getReviews(id)
      .then(data => {
        const results = data.results || [];
        if (results.length !== 0) {
          setReviews(
            results.map(({ author_details: { username }, content, id }) => ({
              nickname: username.toUpperCase(),
              content,
              id,
            }))
          );
        }
      })
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    updateReviews();
  }, [updateReviews]);

  const notReviewsMessage = 'We don`t have any reviews for this movie';

  return reviews.length === 0 ? (
    <p>{notReviewsMessage}</p>
  ) : (
    <ul className={scss.reviews}>
      {reviews.map(({ nickname, content, id }) => (
        <li key={id}>
          <h4>{`Author: ${nickname}`}</h4>
          <article>{content}</article>
        </li>
      ))}
    </ul>
  );
}
