import React from 'react';
import PropTypes from 'prop-types';
import css from './Image.module.css';

function Image({ url, tags = 'image' }) {
  return <img className={css.image} src={url} alt={tags} />;
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default Image;
