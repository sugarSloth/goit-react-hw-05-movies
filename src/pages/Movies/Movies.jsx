import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchFunc from 'components/services';
import Loading from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './Movies.module.css';
import MoviesList from './MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query !== '') {
      setIsLoading(true);
      setError(false);
      fetchFunc(`search/movie?query=${query}`)
        .then(({ results }) => {
          setMovies([...results]);
        })
        .catch(() => setError(true))
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.movie.value.trim();

    if (query === '') return;

    setSearchParams({ search: query });
    setQuery(query);
    event.target.reset();
  };

  return (
    <div className={css.movList}>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loading />}
      {error && <Error />}
      {movies.length > 0 && !error && <MoviesList movies={movies} />}
      {movies.length === 0 && query !== '' && !error && (
        <p>We've found nothing. Try another query!</p>
      )}
    </div>
  );
};

export default Movies;
