import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import scss from './MovieCard.module.scss';

function MovieCard({ movieDetails }) {
  const {
    imgSrc = '',
    title = 'Title',
    releaseYear = 'n/a',
    score,
    overview,
    genres,
  } = movieDetails;

  return (
    <div className={scss.card}>
      <Image url={imgSrc} tags={`Poster "${title}"`} />

      <div className={scss.about}>
        <h2>{`${title} (${releaseYear})`}</h2>
        <p className={scss.score}>{`User Score: ${score}%`}</p>
        <h3>Overview</h3>
        <div>{overview}</div>
        <h4>Genres</h4>
        <p>{genres}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};

export default MovieCard;
