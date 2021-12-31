import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { Squash as Hamburger } from 'hamburger-react';

// import Logo from '../images/elektro-diego-logo.svg';

import NavMenu from './nav/NavMenu';

const Header = () => {
  return (
    <header className='flex justify-between items-center h-16 my-8'>
      <Link to='/'>
        <div className='hidden md:block'>
          <StaticImage
            src='../images/elektro-diego-logo.png'
            alt='Elektro Diego Logo'
            placeholder='blurred'
            layout='constrained'
            height={70}
            loading='eager'
          />
        </div>
        <div className='block md:hidden'>
          <StaticImage
            src='../images/elektro-diego-logo.png'
            alt='Elektro Diego Logo'
            placeholder='blurred'
            layout='constrained'
            height={45}
            loading='eager'
          />
        </div>
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
