import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from '../../lib/axios';

import BlogList from '../../components/Blogs/BlogList';
import Pagination from '../../components/UI/Pagination';

const apiUrl = process.env.NEXT_PUBLIC_API_SERVER;
const BlogsListWithPagination = ({ initialData }) => {
  const router = useRouter();

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`${apiUrl}${router.asPath}`, fetcher, {
    initialData: initialData,
  });
  if (error) return <p>error</p>;
  if (!data) return <p>Loading...</p>;

  const blogs = data.blogs;
  const pagination = data.pagination;

  return (
    <>
      <BlogList blogs={blogs} />
      {pagination.totalPages > 1 && (
        <Pagination
          pageCount={pagination.totalPages}
          currentPage={pagination.currentPage}
        />
      )}
    </>
  );
};

export default BlogsListWithPagination;
