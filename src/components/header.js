import * as React from 'react';
import { Link } from 'gatsby';
import { Squash as Hamburger } from 'hamburger-react';
import { StaticImage } from 'gatsby-plugin-image';

// Images
// import Logo from '../images/svg/elektro-diego-logo.svg';

// Components
import NavMenu from './nav/NavMenu';
import Container from './base/Container';
import Headroom from 'react-headroom';

// Redux
import { connect } from 'react-redux';
import { changeIsNavOpen } from '../../actions/globalActions';

import { useLockBodyScroll, useToggle } from 'react-use';

const Header = ({ changeIsNavOpen, global }) => {
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  const headerTranslateFix = global.isNavOpen ? 'transform translate-y-0' : '';

  return (
    <div className={` bg-white relative z-50`}>
      <Headroom
        disableInlineStyles
        className={global.isNavOpen ? 'is-open' : ''}
      >
        <Container>
          <header
            className={`${headerTranslateFix} header flex justify-between items-center bg-white py-6 border-b-2 border-transparent transition-colors`}
          >
            <Link to='/' onClick={() => changeIsNavOpen(false)}>
              <div className='hidden md:block'>
                <StaticImage
                  src='../images/elektro-diego-logo.png'
                  alt='Elektro Diego Logo'
                  height={71}
                />
              </div>
              <div className='block md:hidden'>
                <StaticImage
                  src='../images/elektro-diego-logo.png'
                  alt='Elektro Diego Logo'
                  height={48}
                />
              </div>

              {/* <Logo className='h-10 md:h-16 w-full' /> */}
            </Link>
            <NavMenu />
            <div className='block md:hidden'>
              <Hamburger
                toggled={global.isNavOpen}
                onToggle={(toggled) => {
                  changeIsNavOpen(toggled);
                  toggleLocked(toggled);
                }}
              />
            </div>
          </header>
        </Container>
      </Headroom>
    </div>
  );
};
const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, { changeIsNavOpen })(Header);
