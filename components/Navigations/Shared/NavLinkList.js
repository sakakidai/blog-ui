import NavLinkItem from './NavLinkItem';

const NavLinkList = () => {
  return (
    <ul className='sm:flex'>
      <li className='p-3'>
        <NavLinkItem href='/blogs'>レビュー一覧</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/about'>サイトについて</NavLinkItem>
      </li>
      <li className='p-3'>
        <NavLinkItem href='/contact'>問い合わせ</NavLinkItem>
      </li>
    </ul>
  );
};

export default NavLinkList;
