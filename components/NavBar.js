import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon, HomeIcon } from '@heroicons/react/outline';
import SideBar from './Navigations/SideBar';

import NavLink from './Navigations/NavLink';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className='container bg-white border-b h-10 flex items-center justify-between'>
      <h1>Home</h1>

      <button
        className='p-3 rounded ml-auto outline-none'
        onClick={handleClick}
      >
        <MenuIcon className='h-6 w-6' />
      </button>
    </header>
  );
};

export default NavBar;
