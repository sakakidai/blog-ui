import Link from 'next/link';

const NavLinkItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='px-4 py-2 rounded trantision-colors ease-in duration-30 block hover:text-yellow-400'>
        {children}
      </a>
    </Link>
  );
};

export default NavLinkItem;
