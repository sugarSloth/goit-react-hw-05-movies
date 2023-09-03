import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchFunc from 'components/services';
import Loading from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetchFunc(`movie/${movieId}/reviews`)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {reviews.length !== 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>No information</p>
      )}
    </>
  );
};

export default Reviews;
