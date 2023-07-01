import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast, urlParams } from 'tmdbApi/tmdb-api';
import scss from './Cast.module.scss';
import defaultImage from '../../images/Cast/avatar.svg';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const { BASE_URL, PHOTO_SIZE } = urlParams;

    const fetchCast = async () => {
      try {
        const data = await getCast(id);
        const actors = data.cast.map(
          ({ id, profile_path, name, character }) => {
            let imgUrl =
              profile_path !== null
                ? `${BASE_URL}${PHOTO_SIZE}${profile_path}`
                : defaultImage;
            return { id, imgUrl, name, character };
          }
        );
        setCast(actors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <ul className={scss.cast}>
      {cast.map(({ id, imgUrl, name, character }) => (
        <li key={id}>
          <img src={imgUrl} alt={`Img by ${name}`} />
          <h4 className={scss.name}>{name}</h4>
          <p className={scss.character}>
            <span>Character:</span> {character}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
