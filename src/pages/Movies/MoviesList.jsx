import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const moviesList = movies.map(({ id, title }) => (
    <li key={id} className="list_item">
      <NavLink to={`/movies/${id}`} state={{ from: location }} className="link">
        {title}
      </NavLink>
    </li>
  ));

  return <ul>{moviesList}</ul>;
};

export default MoviesList;
