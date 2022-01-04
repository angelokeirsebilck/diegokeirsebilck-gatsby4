import React from 'react';
import NavLinks from '../../constants/main-nav';

// Components
import NavLink from './NavLink';

const NavMenu = () => {
  return (
    <div className='flex items-center'>
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

export default NavMenu;
