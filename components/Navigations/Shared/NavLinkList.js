import NavLinkItem from './NavLinkItem';

const NavLinkList = () => {
  return (
    <ul className='md:flex'>
      <li className='p-3'>
        <NavLinkItem href='/'>Home</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/blog'>Blog</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/'>Contact</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/'>About</NavLinkItem>
      </li>
    </ul>
  );
};

export default NavLinkList;
