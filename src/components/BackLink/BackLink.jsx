import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import scss from './BackLink.module.scss';

function BackLink({ backPath, children }) {
  const backLinkHref = backPath.state || '/'; 
  return (
    <div className={scss.link}>
      <Link to={backLinkHref}>
        <HiArrowLeft />
        {children}
      </Link>
    </div>
  );
}

BackLink.propTypes = {
  backPath: PropTypes.object.isRequired, 
};

export default BackLink;
