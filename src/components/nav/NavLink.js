import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NavLink = ({ to, text }) => {
  return (
    <Link className='text-navlink ml-16 font-medium group relative' to={to}>
      <span className='relative z-20'>{text}</span>

      <StaticImage
        src='../../images/spark-hover.svg'
        alt='Spark hover'
        placeholder='blurred'
        layout='constrained'
        loading='eager'
        className='absolute z-10 opacity-0  transition-opacity group-hover:opacity-100 -top-1 left-1/2 transform -translate-x-1/2 rotate-12'
      />
    </Link>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
