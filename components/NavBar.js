import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon, HomeIcon } from '@heroicons/react/outline';

import NavLink from './Navigations/NavLink';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className='bg-gray-300 text-white'>
      <nav className='container flex items-center mx-auto p-3 flex-wrap'>
        <Link href='/'>
          <a className='flex'>
            <HomeIcon className='h-6 w-6' />
            <span className='text-xl font-bold tracking-wide'>TalwindCSS</span>
          </a>
        </Link>

        <button
          className='p-3 hover:bg-gray-600 rounded md:hidden ml-auto outline-none'
          onClick={handleClick}
        >
          <MenuIcon className='h-6 w-6' />
        </button>

        <div
          className={`${
            active ? '' : 'hidden'
          } w-full md:flex md:flex-grow md:w-auto`}
        >
          <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/'>Services</NavLink>
            <NavLink href='/'>About us</NavLink>
            <NavLink href='/'>Contact us</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
