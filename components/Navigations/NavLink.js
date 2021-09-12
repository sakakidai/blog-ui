import Link from 'next/link';

const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='md:flex md:w-auto w-full px-4 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
