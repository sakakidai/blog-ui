import Link from 'next/link';

const NavLinkItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='px-4 py-2 rounded trantision-colors ease-in duration-300 hover:bg-gray-300 hover:text-white block'>
        {children}
      </a>
    </Link>
  );
};

export default NavLinkItem;
