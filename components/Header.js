import NavLinkList from './Navigations/Shared/NavLinkList';
import { MenuIcon } from '@heroicons/react/outline';

const Header = ({ isPhone, onChangeMenu }) => {
  return (
    <header className='bg-white flex items-center justify-center border-b h-10'>
      <div className='flex flex-grow items-center justify-between p-3'>
        <h1>Home</h1>

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
