import fetchFunc from 'components/services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loading from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import List from 'components/List/List';

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

  const castList = cast.map(({ character, id, name, profile_path }) => {
    return (
      <li key={id} className={css.item}>
        <img
          src={
            profile_path !== null
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-117831744.jpg'
          }
          alt={name}
          width={120}
        />
        <div className={css.name_wrapper}>
          <h5>{name}</h5>
          <h6>{character}</h6>
        </div>
      </li>
    );
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {cast.length !== 0 ? (
        <List children={castList} className={css.list} />
      ) : (
        <p>No information</p>
      )}
    </>
  );
};

export default Cast;
