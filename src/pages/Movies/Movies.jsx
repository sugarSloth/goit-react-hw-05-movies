import { Suspense, lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'tmdbApi/tmdb-api';
import scss from './Movies.module.scss';

const Searchbar = lazy(() => import('../../components/Searchbar'));
const MoviesList = lazy(() => import('../../components/MoviesList'));
const Loader = lazy(() => import('../../components/Loader'));

export default function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    setSearchedMovies([]);

    const fetchMovies = async () => {
      try {
        const data = await getMovies(query);
        if (data.results.length !== 0) {
          const movies = data.results.map(({ id, poster_path, title }) => {
            return { id, poster_path, title };
          });
          setSearchedMovies(movies);
        } else {
          alert(`Movies by your request "${query}" did not found`);
        }
      } catch (error) {
        console.log(`Error in Movies page during getMovies: ${error}`);
      }
    };

    if (query !== '') {
      fetchMovies();
    }
  }, [query]);

  const updateSearchParams = value => {
    const searchString = value.searchString;
    if (query !== searchString) {
      setSearchParams({ query: searchString });
    } else {
      if (query !== '') {
        alert(`You are actually looking at "${value.searchString}" pictures`);
      }
    }
  };

  return (
    <>
      <Searchbar className={scss.searchbar} onSubmit={updateSearchParams} />
      <Suspense fallback={<Loader />}>
        {searchedMovies.length !== 0 && <MoviesList movies={searchedMovies} />}
      </Suspense>
    </>
  );
}
