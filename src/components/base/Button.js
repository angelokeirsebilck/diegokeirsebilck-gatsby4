import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Redux
import { connect } from 'react-redux';
import { changeIsNavOpen } from '../../../actions/globalActions';

const ThemeButton = ({ className, type, text, to, changeIsNavOpen }) => {
  const defaultClass = 'btn ';
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
        >
          {text}
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
