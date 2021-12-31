import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { Squash as Hamburger } from 'hamburger-react';

import Logo from '../images/svg/elektro-diego-logo.svg';

import NavMenu from './nav/NavMenu';

const Header = () => {
  return (
    <header className='flex justify-between items-center h-11 md:h-16 my-8'>
      <Link to='/'>
        <Logo className='h-10 md:h-16 w-full' />
      </Link>
      <div className='hidden md:block'>
        <NavMenu />
      </div>
      <div className='block md:hidden'>
        <Hamburger />
      </div>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
