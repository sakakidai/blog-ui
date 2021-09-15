import NavLinkList from './Navigations/Shared/NavLinkList';
import { MenuIcon } from '@heroicons/react/outline';

const Header = ({ isPhone, onChangeMenu }) => {
  return (
    <header className='bg-white flex items-center justify-center border-b h-14'>
      <div className='flex flex-grow items-center justify-between p-3'>
        <span className='text-xl font-bold tracking-wide'>Blog WebSite</span>

        {isPhone ? (
          <button
            className='p-3 rounded ml-auto outline-none'
            onClick={onChangeMenu}
          >
            <MenuIcon className='h-6 w-6' />
          </button>
        ) : (
          <NavLinkList />
        )}
      </div>
    </header>
  );
};

export default Header;
