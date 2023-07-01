import { Suspense, lazy, useEffect, useState } from 'react';
import { getTrending } from 'tmdbApi/tmdb-api';
import scss from './Home.module.scss';

const MoviesList = lazy(() => import('../../components/MoviesList'));
const Loader = lazy(() => import('../../components/Loader'));

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrending();
        const trendingList = data.results.map(
          ({ backdrop_path, id, poster_path, title }) => {
            return { backdrop_path, id, poster_path, title };
          }
        );
        setTrending(trendingList);
      } catch (error) {
        console.log(`Error in Home page during getTrending: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className={scss.title}>Trending today</h2>
      <Suspense fallback={<Loader />}>
        {trending.length === 0 ? (
          <h2>Something going wrong...</h2>
        ) : (
          <MoviesList movies={trending} />
        )}
      </Suspense>
    </>
  );
}
