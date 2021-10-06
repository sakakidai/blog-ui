import NavLinkItem from './NavLinkItem';

const NavLinkList = () => {
  return (
    <ul className='sm:flex'>
      <li className='p-3'>
        <NavLinkItem href='/blogs'>ブログ一覧</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/'>サイトについて</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/'>問い合わせ</NavLinkItem>
      </li>
    </ul>
  );
};

export default NavLinkList;
