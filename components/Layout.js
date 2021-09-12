import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children, title }) {
  return (
    <div className='font-mono'>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main className=''>{children}</main>
      <footer className='w-full h-6 flex justify-center items-center text-gray-500 bg-gray-800 text-sm'>
        @sakaki 2021
      </footer>
    </div>
  );
}
