import React, { useState, useEffect } from 'react';
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

  const handleSearch = newQuery => {
    setSearchParams({ search: newQuery });
    setQuery(newQuery);
  };

  return (
    <div className={css.movList}>
      <SearchForm onSearch={handleSearch} />
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
