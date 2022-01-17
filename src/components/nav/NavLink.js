import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Images
import SparkHover from '../../images/svg/spark-hover.svg';

// Components
import Button from '../base/Button';

// Redux
import { connect } from 'react-redux';
import { changeIsNavOpen } from '../../../actions/globalActions';

const NavLink = ({ to, text, special, changeIsNavOpen }) => {
  const link = special ? (
    <div className='mb-6 md:mb-0 md:ml-16'>
      <Button
        type='gatsby'
        to={to}
        className='btn-black btn-consist'
        text={text}
      />
    </div>
  ) : (
    <Link
      className='text-navlink mb-6 md:mb-0 md:ml-16 font-medium group relative'
      to={to}
      onClick={() => changeIsNavOpen(false)}
      activeClassName='link-active'
    >
      <span className='relative z-20 lowercase'>{text}</span>
      <SparkHover
        alt='Spark hover'
        className='absolute z-10 opacity-0 transition-opacity group-hover:opacity-100 top-[3.5px] left-1/2 transform -translate-x-1/2 rotate-12'
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

export default connect(null, { changeIsNavOpen })(NavLink);
