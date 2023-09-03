import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import CastList from './CastList';
import fetchFunc from 'components/services';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetchFunc(`movie/${movieId}/credits`)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {cast.length !== 0 ? <CastList cast={cast} /> : <p>No information</p>}
    </>
  );
};

export default Cast;
