import Head from 'next/head';
import { useState } from 'react';
import { useMaxBreakPoint } from '../hooks/useBreakpoint';

import Header from './Header';
import Footer from './Footer';
import SideBar from './Navigations/Phone/SideBar';
import Overlay from './Navigations/Phone/Overlay';

import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo.config';

export default function Layout({ children, title }) {
  const [isOpenedSideMenu, setIsOpenedSideMenu] = useState(false);
  const isPhone = useMaxBreakPoint('sm');

  const handleClickMenuIcon = () => {
    setIsOpenedSideMenu(!isOpenedSideMenu);
  };

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} | アイドルマッサージレビュー`}</title>
        </Head>
      )}
      <DefaultSeo {...SEO} />

      <div className='font-mono bg-gray-100 flex'>
        {isPhone && isOpenedSideMenu && (
          <Overlay onClosed={handleClickMenuIcon} />
        )}
        <main className='flex flex-col w-full min-h-screen'>
          <Header isPhone={isPhone} onChangeMenu={handleClickMenuIcon} />
          <div className='h-full'>{children}</div>
          <Footer />
        </main>

        {isPhone && isOpenedSideMenu && (
          <SideBar onClosed={handleClickMenuIcon} />
        )}
      </div>
    </>
  );
}
