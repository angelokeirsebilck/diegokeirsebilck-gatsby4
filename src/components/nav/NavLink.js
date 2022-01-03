import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Button from '../base/Button';
import SparkHover from '../../images/svg/spark-hover.svg';

const NavLink = ({ to, text, special }) => {
  const link = special ? (
    <div className='ml-16'>
      <Button type='gatsby' to={to} className='btn-black' text={text} />
    </div>
  ) : (
    <Link className='text-navlink ml-16 font-medium group relative' to={to}>
      <span className='relative z-20 lowercase'>{text}</span>
      <SparkHover
        alt='Spark hover'
        className='absolute z-10 opacity-0 transition-opacity group-hover:opacity-100 -top-1 left-1/2 transform -translate-x-1/2 rotate-12'
      />
      {/* <img src={SparkHover} /> */}
    </Link>
  );

  return link;
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  special: PropTypes.bool.isRequired,
};

export default NavLink;
