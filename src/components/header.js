import * as React from 'react';
import { Link } from 'gatsby';
import { Squash as Hamburger } from 'hamburger-react';

// Images
import Logo from '../images/svg/elektro-diego-logo.svg';

// Components
import NavMenu from './nav/NavMenu';
import Container from './base/Container';
import Headroom from 'react-headroom';

// Redux
import { connect } from 'react-redux';
import { changeIsNavTop } from '../../actions/globalActions';

const Header = ({ changeIsNavTop, global }) => {
  const headerSpacing = global.isNavTop ? 'py-6' : 'py-2';

  return (
    <div className={` bg-white relative z-50`}>
      <Headroom disableInlineStyles>
        <Container>
          <header className={`flex justify-between items-center bg-white py-6`}>
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
        </Container>
      </Headroom>
    </div>
  );
};
const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, { changeIsNavTop })(Header);
