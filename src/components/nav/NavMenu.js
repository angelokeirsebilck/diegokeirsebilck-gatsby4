import React from 'react';

import NavLinks from '../../constants/main-nav';
import NavLink from './NavLink';

const NavMenu = () => {
  return (
    <div className='flex items-center py-8'>
      {NavLinks.map((link) => {
        return <NavLink key={link.id} to={link.url} text={link.name} />;
      })}
    </div>
  );
};

export default NavMenu;
