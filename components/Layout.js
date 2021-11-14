import Head from 'next/head';
import { useState } from 'react';
import { useMaxBreakPoint } from '../hooks/useBreakpoint';
import { Transition } from 'react-transition-group';

import Header from './Header';
import Footer from './Footer';
import SideBar from './Navigations/Phone/SideBar';
import Overlay from './Navigations/Phone/Overlay';
import ReturnTopButton from '../components/UI/ReturnTopButton';

export default function Layout({
  children,
  title,
  idols,
  genreList,
  saleList,
}) {
  const TransitionClass = {
    entering:
      'transform -translate-x-80 transition duration-500 ease-in-out opacity-1',
    entered: 'transform -translate-x-80 opacity-1',
    exiting:
      'transform translate-x-80 transition duration-1000 ease-in-out opacity-0',
    exited: 'transform translate-x-80 opacity-0',
  };

  const [isOpenedSideMenu, setIsOpenedSideMenu] = useState(false);
  const isPhone = useMaxBreakPoint('sm');

  const handleClickMenuIcon = () => {
    setIsOpenedSideMenu(!isOpenedSideMenu);
  };

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} | アイドルレビューズ`}</title>
        </Head>
      )}

      <div className='font-mono bg-gray-100 flex'>
        {isPhone && isOpenedSideMenu && (
          <Overlay onClosed={handleClickMenuIcon} />
        )}
        <main className='flex flex-col w-full min-h-screen'>
          <Header isPhone={isPhone} onChangeMenu={handleClickMenuIcon} />
          <div className='h-full'>{children}</div>
          <Footer />
        </main>

        <Transition in={isPhone && isOpenedSideMenu} timeout={1500}>
          {(state) => (
            <div
              className={`fixed -right-80 z-20 ${state} ${TransitionClass[state]}`}
            >
              <SideBar
                onClosed={handleClickMenuIcon}
                idols={idols}
                genreList={genreList}
                saleList={saleList}
              />
            </div>
          )}
        </Transition>

        <ReturnTopButton />
      </div>
    </>
  );
}
