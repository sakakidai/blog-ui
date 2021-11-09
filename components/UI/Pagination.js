import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const Pagination = ({ pageCount, currentPage }) => {
  const router = useRouter();

  const handlePagination = (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const ChevronLeftIconElement = () => {
    return <ChevronLeftIcon className='h-5 w-5 text-yellow-400' />;
  };

  const ChevronRightIconElement = () => {
    return <ChevronRightIcon className='h-5 w-5 text-yellow-400' />;
  };

  return (
    <div id='react-paginate' className='flex justify-center m-5'>
      <ReactPaginate
        previousLabel={ChevronLeftIconElement()}
        nextLabel={ChevronRightIconElement()}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        forcePage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePagination}
      />
    </div>
  );
};

export default Pagination;
