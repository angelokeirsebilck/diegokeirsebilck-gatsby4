import React from 'react';
import NavLinks from '../../constants/main-nav';

// Components
import NavLink from './NavLink';

// Redux
import { connect } from 'react-redux';

const NavMenu = ({ global }) => {
  const navStyle = global.isNavOpen
    ? 'opacity-1 visible md:visible md:opacity-100 -left-4'
    : 'invisible md:visible opacity-0 md:opacity-100 left-[-17px] ';

  return (
    <div
      className={`${navStyle} top-24  md:left-0 md:top-0 transition-opacity bg-primary md:visible md:bg-white fixed md:relative w-screen md:w-auto h-[calc(100vh_-_96px)] md:h-auto flex flex-col md:flex-row justify-center md:justify-end items-center`}
    >
      {NavLinks.map((link) => {
        if (link.header) {
          return (
            <NavLink
              key={link.id}
              to={link.url}
              text={link.name}
              special={link.special}
            />
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps)(NavMenu);
