import React from 'react';
import css from './Cast.module.css';

const defaultProfileImage =
  'https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-117831744.jpg';

const CastList = ({ cast }) => {
  const castItems = cast.map(({ character, id, name, profile_path }) => (
    <li key={id} className={css.item}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultProfileImage
        }
        alt={name}
        width={120}
      />
      <div className={css.name_wrapper}>
        <h5>{name}</h5>
        <h6>{character}</h6>
      </div>
    </li>
  ));

  return <ul className={css.list}>{castItems}</ul>;
};

export default CastList;
