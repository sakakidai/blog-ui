import { useState } from 'react';
// import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className='bg-gray-200'>
      <div className='container mx-auto text-white'>
        {/* nav ber */}
        <div className='flex justify-between items-center fixed bg-gray-500 w-full left-0 h-16'>
          <h1 className='text-4xl font-semibold '>Blog Web</h1>
          <div>
            <button className='md:hidden' onClick={handleClick}>
              {active && <XIcon className='h-6 w-6' />}
              {!active && <MenuIcon className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* nav bar hamburger list */}
        <div
          className={`${
            active ? 'block' : 'hidden'
          } fixed bg-gray-500 w-full left-0 md:static mt-16`}
        >
          <ul className='md:flex md:justify-end'>
            <li className='border-b border-white md:border-none'>
              <a
                href='#'
                className='block px-8 py-2 my-4 hover:bg-gray-600 rounded'
              >
                HRとは
              </a>
            </li>
            <li className='border-b border-white md:border-none'>
              <a
                href='#'
                className='block px-8 py-2 my-4 hover:bg-gray-600 rounded'
              >
                機能一覧
              </a>
            </li>
            <li className='border-b border-white md:border-none'>
              <a
                href='#'
                className='block px-8 py-2 my-4 hover:bg-gray-600 rounded'
              >
                料金プラン
              </a>
            </li>
            <li className='border-b border-white md:border-none'>
              <a
                href='#'
                className='block px-8 py-2 my-4 hover:bg-gray-600 rounded'
              >
                お知らせ
              </a>
            </li>
            <li className='border-b md:border-none'>
              <a
                href='#'
                className='block px-8 py-2 my-4 hover:bg-gray-600 rounded'
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};