import Link from 'next/link';

const SideBar = () => {
  return (
    <aside className='bg-white w-64 min-h-screen flex flex-col'>
      <div className='bg-white border-l border-b px-4 h-10 flex imtes-center'>
        <span className='text-bule py-2'>Application</span>
      </div>

      <div className='border-l flex-grow'>
        <nav>
          <ul>
            <li className='p-3'>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className='p-3'>
              <Link href='/'>
                <a>Profile</a>
              </Link>
            </li>
            <li className='p-3'>
              <Link href='/'>
                <a>Contact</a>
              </Link>
            </li>
            <li className='p-3'>
              <Link href='/'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
