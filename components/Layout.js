import Head from 'next/head';
import { MenuIcon, XIcon, HomeIcon } from '@heroicons/react/outline';
import SideBar from './Navigations/SideBar';
import { useState } from 'react';
import useBreakPoint from '../hooks/useBreakpoint';

export default function Layout({ children, title }) {
  const [isOpened, setIsOpened] = useState(false);

  const isPhone = useBreakPoint('sm');

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className='font-mono'>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex bg-gray-100'>
        <main className='flex flex-grow flex-col min-h-screen '>
          <header className='bg-white border-b h-10 flex items-center justify-center'>
            <div className='flex flex-grow items-center justify-between p-3'>
              <h1>Home</h1>

              <button
                className='p-3 rounded ml-auto outline-none'
                onClick={handleClick}
              >
                {isPhone && !isOpened && <MenuIcon className='h-6 w-6' />}
                {isPhone && isOpened && <XIcon className='h-6 w-6' />}
              </button>
            </div>
          </header>

          {children}

          {/* <footer className='w-full h-6 flex justify-center items-center text-gray-500 bg-gray-800 text-sm'>
            @sakaki 2021
          </footer> */}
        </main>
        {isPhone && isOpened && <SideBar />}
      </div>
    </div>
  );
}
