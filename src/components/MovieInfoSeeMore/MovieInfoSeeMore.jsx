import { NavLink } from 'react-router-dom';
import css from './MovieInfoSeeMore.module.css';

const MovieInfoSeeMore = () => {
  return (
    <>
      <div className={css.seeMore}>
        <h4>See more:</h4>
        <ul className={css.list}>
          <li className={css.link}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={css.link}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieInfoSeeMore;
