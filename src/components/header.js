import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage, getImage } from 'gatsby-plugin-image';

import NavMenu from './nav/NavMenu';

const Header = () => (
  <header className='flex justify-between py-4'>
    <Link to='/'>
      <StaticImage
        src='../images/elektro-diego-logo.svg'
        alt='Elektro Diego Logo'
        placeholder='blurred'
        layout='constrained'
        loading='eager'
      />
    </Link>
    <NavMenu />
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
