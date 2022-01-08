import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Images
import SparkHover from '../../images/svg/spark-hover.svg';

// Redux
import { connect } from 'react-redux';
import { changeIsNavOpen } from '../../../actions/globalActions';

const ThemeButton = ({ className, type, text, to, changeIsNavOpen }) => {
  const defaultClass = 'btn relative ';
  const btnClass = defaultClass + className;
  switch (type) {
    case 'button':
      return <button className={btnClass}>{text}</button>;
    case 'submit':
      return (
        <button type='submit' className={btnClass}>
          {text}
        </button>
      );
    case 'gatsby':
      return (
        <Link
          onClick={() => changeIsNavOpen(false)}
          to={to}
          className={btnClass}
          activeClassName='link-active'
        >
          <span> {text}</span>

          <SparkHover
            alt='Spark hover'
            className='absolute z-10 opacity-0 transition-opacity top-[3.5px] left-1/2 transform -translate-x-1/2 rotate-12'
          />
        </Link>
      );
    default:
      return <a href=''>{text}</a>;
  }
};

ThemeButton.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect(null, { changeIsNavOpen })(ThemeButton);
