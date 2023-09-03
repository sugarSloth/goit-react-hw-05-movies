import fetchFunc from 'components/services';
import { useEffect, useState } from 'react';
import css from './Home.module.css';
import Loading from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import TrendsList from './TrendsList';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetchFunc('trending/all/day')
      .then(({ results }) => {
        setTrends([...results]);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={css.movList}>
      <h2 className={css.title}>Trending today:</h2>

      <TrendsList trends={trends} />

      {isLoading && <Loading />}
      {error && <Error />}
    </div>
  );
};

export default Home;
