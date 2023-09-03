import MovieInfoComponent from 'components/MovieInfoComponent/MovieInfoComponent';
import css from './MovieInfo.module.css';

const MovieInfo = ({ poster, title, rating, overview, genres }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <img src={poster} alt="poster" width="200" />
      </div>

      <div>
        <h2 className={css.title}>{title}</h2>
        {rating !== 0 && <p className={css.rating}>Rating: {rating}/10</p>}

        {overview && (
          <div className={css.overview}>
            <>
              <MovieInfoComponent title="Overview" info={overview} />
            </>
          </div>
        )}

        <div className={css.genres}>
          {genres && (
            <>
              <MovieInfoComponent title="Genres" info={genres} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
