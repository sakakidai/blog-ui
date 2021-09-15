import Link from 'next/link';

const NavLinkItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='px-4 py-2 rounded hover:bg-gray-600 hover:text-white block'>
        {children}
      </a>
    </Link>
  );
};

export default NavLinkItem;
