import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { getDetails } from 'tmdbApi/tmdb-api';
import scss from './MovieDetails.module.scss';
import alternativeImage from '../../images/cut_film.svg';

const BackLink = lazy(() => import('../../components/BackLink'));
const MovieCard = lazy(() => import('../../components/MovieCard'));
const Loader = lazy(() => import('../../components/Loader'));

const BASE_URL = 'https://image.tmdb.org/t/p/';
const file_size = 'w500';

export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState({});
  const backPath = useRef(location);

  const updateDetails = useCallback(async () => {
    try {
      const data = await getDetails(id);
      const {
        genres,
        overview,
        poster_path,
        release_date,
        title,
        vote_average,
      } = data;

      let imgUrl;
      if (poster_path === null) {
        imgUrl = alternativeImage;
      } else {
        imgUrl = `${BASE_URL}${file_size}${poster_path}`;
      }

      setDetails({
        imgSrc: imgUrl,
        title: title,
        releaseYear: release_date.slice(0, 4),
        score: Math.round(vote_average * 10),
        overview: overview,
        genres: getGenresString(genres),
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    updateDetails();
  }, [updateDetails]);

  return (
    <>
      <div className={scss.backlink}>
        <Suspense fallback={<Loader />}>
          <BackLink backPath={backPath.current}>Go back</BackLink>
        </Suspense>
      </div>

      <div className={scss.card}>
        <Suspense fallback={<Loader />}>
          <MovieCard details={details} />
        </Suspense>
      </div>

      <div className={scss.subnav}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">
              <HiArrowRight />
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews">
              <HiArrowRight />
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

function getGenresString(genres) {
  return genres.map(genre => genre.name).join(' ');
}
