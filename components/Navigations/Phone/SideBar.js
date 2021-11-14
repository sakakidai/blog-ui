import { XIcon } from '@heroicons/react/outline';
import NavLinkList from '../Shared/NavLinkList';
import SelectSearch from '../Phone/SelectSearch';

const SideBar = ({ onClosed, idols, genreList, saleList }) => {
  return (
    <aside className='bg-white w-64 min-h-screen flex flex-col inset-y-0 right-0 fixed z-20 '>
      <div className='bg-white border-l border-b border-yellow-400 px-4 h-10 flex items-center'>
        <span className='py-2 text-yellow-400'>メニュー</span>
        <button className='p-3 rounded ml-auto outline-none' onClick={onClosed}>
          <XIcon className='h-6 w-6 text-yellow-400' />
        </button>
      </div>

      <div className='border-l'>
        <nav>
          <NavLinkList />
        </nav>
      </div>

      {idols && genreList && saleList && (
        <>
          <div className='bg-white border-l border-b border-yellow-400 px-4 h-10 flex items-center'>
            <span className='py-2 text-yellow-400'>検索</span>
          </div>

          <div className='border-l border-c'>
            <nav>
              <ul>
                <li className='p-3'>
                  <span className='py-2 block'>ジャンル</span>
                  <SelectSearch
                    options={genreList.concat(saleList).map((tag) => {
                      return {
                        value: tag.name,
                        label: `${tag.name}(${tag.taggingsCount}件)`,
                      };
                    })}
                    redirectUrl={(params) => {
                      return `/blogs?tag=${params}`;
                    }}
                  />
                </li>
                <li className='p-3'>
                  <span className='py-2 block'>アイドル名</span>
                  <SelectSearch
                    options={idols.map((idol) => {
                      return {
                        value: idol.id,
                        label: `${idol.name}(${idol.publishBlogsCount}件)`,
                      };
                    })}
                    redirectUrl={(params) => {
                      return `/idols/${params}`;
                    }}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </aside>
  );
};

export default SideBar;
