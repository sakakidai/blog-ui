import Head from 'next/head';
import { useState } from 'react';
import { useMaxBreakPoint } from '../hooks/useBreakpoint';

import Header from './Header';
import SideBar from './Navigations/Phone/SideBar';
import Overlay from './Navigations/Phone/Overlay';

export default function Layout({ children, title }) {
  const [isOpenedSideMenu, setIsOpenedSideMenu] = useState(false);
  const isPhone = useMaxBreakPoint('sm');

  const clickMenuIconHandler = () => {
    setIsOpenedSideMenu(!isOpenedSideMenu);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className='font-mono bg-gray-100 flex'>
        {isPhone && isOpenedSideMenu && (
          <Overlay onClosed={clickMenuIconHandler} />
        )}
        <main className='flex flex-col min-h-screen'>
          <Header isPhone={isPhone} onChangeMenu={clickMenuIconHandler} />
          {children}
        </main>

        {isPhone && isOpenedSideMenu && (
          <SideBar onClosed={clickMenuIconHandler} />
        )}
      </div>
    </>
  );
}
