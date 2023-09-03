import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const TrendsList = ({ trends }) => {
  const location = useLocation();

  const trendsList = trends.map(({ id, title, name }) => (
    <li key={id} className="list_item">
      <NavLink to={`/movies/${id}`} state={{ from: location }} className="link">
        {title ?? name}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <ul>{trendsList}</ul>
    </div>
  );
};

export default TrendsList;
