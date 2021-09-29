import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <ul className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  );
};

export default BlogList;
