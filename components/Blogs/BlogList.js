import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  );
};

export default BlogList;
