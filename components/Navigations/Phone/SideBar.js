import { XIcon } from '@heroicons/react/outline';
import NavLinkList from '../Shared/NavLinkList';

const SideBar = ({ onClosed }) => {
  return (
    <aside className='bg-white w-64 min-h-screen flex flex-col inset-y-0 right-0 fixed z-20'>
      <div className='bg-white border-l border-b px-4 h-10 flex items-center'>
        <span className='py-2'>Application</span>
        <button className='p-3 rounded ml-auto outline-none' onClick={onClosed}>
          <XIcon className='h-6 w-6' />
        </button>
      </div>

      <div className='border-l flex-grow'>
        <nav>
          <NavLinkList />
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
